import { promisify } from 'util';
import {sha256} from 'sha.js';
import axios from 'axios';

const submitUrl = 'https://3wob8jwkof.execute-api.us-east-1.amazonaws.com/default/rugby-pick-api/';

export const delay = promisify((time, callback) => setTimeout(callback, time));

export function submitPicks(picks, { email, password, name }) {

    const editKey = createEditKey(password);

    return axios.post(submitUrl, {
        picks,
        name,
        email,
        editKey
    }).then(() => 'Picks Submitted');
}

function createEditKey(password) {
    return new sha256().update(password).digest('hex');
}