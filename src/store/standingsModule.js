import {FETCH_STANDINGS, REFRESH_RESULTS} from './actionTypes';
import { chain, sumBy, orderBy } from 'lodash';
import Contestant from '../data/Contestent';
import axios from 'axios';

const getAllPicksUrl = 'https://parlicious-data-public.s3.amazonaws.com/picks/rugby-world-cup/2019/picks.json';

//TODO: fetch actual contestants here
function fetchContestants() {
    return axios.get(getAllPicksUrl)
        .then(response => response.data.pool_participants);
}

function mapContestant(contestant, resultsByCountry) {
    Object.setPrototypeOf(contestant, Contestant.prototype);

    contestant.setCalls(
        orderBy(contestant.getCalls()
            .map(name => {
                const resultForCountry = resultsByCountry[name];
                return { 
                    name,
                    value : Number(resultForCountry.value), 
                    originalValue: -1 * Number(resultForCountry.ew)
                };
            }),
            'value',
            'desc'
        ));
    contestant.setPuts(
        orderBy(contestant.getPuts()
            .map(name => {
                const resultForCountry = resultsByCountry[name];
                return {
                    name,
                    value : -1 * Number(resultForCountry.value),
                    originalValue : Number(resultForCountry.ew)
                };
            }),
            'value', 'desc'
        ));
    contestant.setScore(sumBy([...contestant.getCalls(), ...contestant.getPuts()], 'value'));
    contestant.setOriginalScore(sumBy([...contestant.getCalls(), ...contestant.getPuts()], 'originalValue'));

    return contestant;
}
export default {
    state : {
        standings : null,
        callsByCountry : {},
        putsByCountry : {}
    },
    mutations : {
        setStandings : (state, standings) => {
            state.standings = standings;
            const callsByCountry = {};
            const putsByCountry = {};

            standings.forEach(contestant => {
                contestant.getCalls().forEach(call => {
                    const country = call.name;
                    const countryCalls = callsByCountry[country] || [];
                    callsByCountry[country] = countryCalls;
                    countryCalls.push(contestant);
                });
                contestant.getPuts().forEach(put => {
                    const country = put.name;
                    const countryPuts = putsByCountry[country] || [];
                    putsByCountry[country] = countryPuts;
                    countryPuts.push(contestant);
                });
            });
            state.callsByCountry = callsByCountry;
            state.putsByCountry = putsByCountry;
        }
    },
    getters : {
        standings : ({standings}) => standings,
        callsForCountry : ({callsByCountry}) => (country) => callsByCountry[country],
        putsForCountry : ({putsByCountry}) => (country) => putsByCountry[country]
    },
    actions : {
        [FETCH_STANDINGS] : async ({rootGetters, commit, dispatch}) => {
            let resultsPulled;
            if(!rootGetters.matchesByTeam) {
                resultsPulled = dispatch(REFRESH_RESULTS);
            }
            else {
                resultsPulled = Promise.resolve();
            }

            const [contestants] = await Promise.all([fetchContestants(), resultsPulled]);
            const standings = chain(contestants)
                    .map(contestant => mapContestant(contestant, rootGetters.matchesByTeam))
                    .orderBy(['score'], ['desc'])
                    .value();
            commit('setStandings', standings);
        }
    }
};