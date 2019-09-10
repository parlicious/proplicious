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
            .map(name => ({ name, value : Number(resultsByCountry[name].value)})),
            'value',
            'desc'
        ));
    contestant.setPuts(
        orderBy(contestant.getPuts()
            .map(name => ({ name, value : -1 * Number(resultsByCountry[name].value)})),
            'value', 'desc'
        ));
    contestant.setScore(sumBy([...contestant.getCalls(), ...contestant.getPuts()], 'value'));

    return contestant;
}
export default {
    state : {
        standings : null
    },
    mutations : {
        setStandings : (state, standings) => state.standings = standings
    },
    getters : {
        standings : ({standings}) => standings
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