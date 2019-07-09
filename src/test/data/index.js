import data from './data';
import { cloneDeep } from 'lodash';

function generateResult(match) {
    if(match.time.millis > 1570347900000) {
        return;
    }
    const sim = Math.random();
    if(match.time.millis > 1570002300000) {
        match.status = 'L';
        if(sim > .6) {
            match.scores[0] = 1;
        }
        else if(sim > .2) {
            match.scores[1] = 1;
        }
    }
    else if(sim > .9) {
            match.status = 'D';
    }
    else if(sim > .55){
        match.status = 'A';
    }
    else {
        match.status = 'B';
    }
    
}
export function simulateResults() {
    const results = cloneDeep(data);

    results.matches.forEach(generateResult);
    return results;
}