import { promisify } from 'util';

export const delay = promisify((time, callback) => setTimeout(callback, time));

// eslint-disable-next-line no-unused-vars
export async function submitPicks(picks, { email, password }) {

    //TODO: Donnie magic to persist pick
    await delay(6000);
    return 'Picks Submitted';
}