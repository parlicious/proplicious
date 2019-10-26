import { SET_MATCHES } from "./mutationTypes";
import { mapValues, map, countBy, sum, filter } from 'lodash';
import countries from '../data/countries';
import { REFRESH_RESULTS } from "./actionTypes";
import axios from 'axios';
import { simulateResults } from '../test/data';
import { delay } from '../utils';
function determineResultForTeam(match, teamName, opponent) {
    const teamIsA = match.teams[0].name === teamName;
    let result;
    if(match.status === 'U' || match.status === 'D') {
        result = match.status;
    }
    else if(match.outcome === 'D'  || match.status === 'CC') {
        result = 'D';
    }
    else if(match.outcome === 'A') {
        result = teamIsA ? 'W' : 'L';
    }
    else if(match.outcome === 'B') {
        result = !teamIsA ? 'W' : 'L';
    }
    else {
        const teamScore = teamIsA ? match.scores[0] : match.scores[1];
        const oppScore = teamIsA ? match.scores[1] : match.scores[0];

        if(teamScore > oppScore) {
            result = 'Winning';
        }
        else if(oppScore > teamScore) {
            result = 'Losing';
        }
        else {
            result = 'Tied';
        }
    }
    return {
        result,
        match,
        teamName,
        opponent
    };
}
function getResults(resultsUrl, fake) {
    return fake ? getFakeInfo() : getRealInfo(resultsUrl);
}
async function getFakeInfo() {
    await delay(1500);
    return simulateResults();
}
async function getRealInfo(resultsUrl) {
    const { data : eventInfo } = await axios.get(resultsUrl);
    return eventInfo;
}
export default function(eventId, firstMatchTime) {
    const resultsUrl = `https://cmsapi.pulselive.com/rugby/event/${eventId}/schedule?language=en`;
    return {
        state : {
            matches : null,
            matchesByTeam : null,
            firstMatchTime
        },
        mutations : {
            [SET_MATCHES] : (state, matches) => {
                state.matches = matches;
                const matchesByTeam = mapValues(countries, ({name, ew}) => ({ name, ew, matches:[] }));

                matches.forEach(match => {
                    const [team1, team2] = map(match.teams, 'name');
                    if(matchesByTeam[team1]){
                        matchesByTeam[team1].matches.push(determineResultForTeam(match, team1, team2));
                    }
                    if(matchesByTeam[team2]) {
                        matchesByTeam[team2].matches.push(determineResultForTeam(match, team2, team1));
                    }
                });

                Object.values(matchesByTeam).forEach(info => {
                    info.results = countBy(info.matches, 'result');
                    info.results.W = info.results.W || 0;
                    info.results.L = info.results.L || 0;
                    info.results.D = info.results.D || 0;
                    info.currentPoints = info.results.W + (info.results.D /2);
                    info.possiblePoints = sum(filter(info.results, (count, status) => status !== 'D' && status !== 'L')) + ((info.results.D || 0) / 2);
                    info.value = (info.currentPoints - info.ew).toFixed(2);
                });

                state.matchesByTeam = matchesByTeam;
            }
        },
        getters : {
            matchesByTeam : ({matchesByTeam}) => matchesByTeam,
            matchesForTeam : ({matchesByTeam}) => (teamName) => matchesByTeam && matchesByTeam[teamName],
            firstMatchTime : ({firstMatchTime}) => firstMatchTime,
            matches : ({matches}) => matches
        },
        actions : {
            [REFRESH_RESULTS] : async function({commit}) {
                const eventInfo = await getResults(resultsUrl);
                commit(SET_MATCHES, eventInfo.matches);
            }
        }
    };
}