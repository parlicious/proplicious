import {FETCH_STANDINGS, REFRESH_RESULTS} from './actionTypes';
import { chain, sumBy } from 'lodash';
import Contestant from '../data/Contestent';

//TODO: fetch actual contestants here
async function fetchContestants() {
    return [
        { name : 'El Chad', email : '', calls : ['South Africa', 'England', 'USA', 'France'], puts : ['Wales', 'Ireland', 'New Zealand', 'Uruguay']},
        { name : 'The Don', email : '', calls : ['Namibia', 'Argentina', 'Georgia', 'Japan'], puts : ['Russia', 'Canada', 'Ireland', 'Australia']},
        { name : 'Ham Bone', email : '', calls : ['New Zealand', 'USA', 'Samoa', 'Fiji'], puts: ['Tonga', 'South Africa', 'Georgia', 'Scotland']}
    ];
}

function mapContestant(contestant, resultsByCountry) {
    Object.setPrototypeOf(contestant, Contestant.prototype);

    contestant.setCalls(contestant.getCalls().map(name => ({ name, value : Number(resultsByCountry[name].value)})));
    contestant.setPuts(contestant.getPuts().map(name => ({ name, value : -1 * Number(resultsByCountry[name].value)})));
    contestant.setScore(sumBy([...contestant.getCalls(), ...contestant.getPuts()], 'value').toFixed(2));

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