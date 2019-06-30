import { promisify } from 'util';

export const delay = promisify((time, callback) => setTimeout(callback, time));