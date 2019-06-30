import { SUBMIT_ERRORS, SUCCESS_MESSAGE } from './actionTypes';
import { REMOVE_MESSAGE } from './mutationTypes';
import { promisify } from 'util';
import Vue from 'vue';
import * as uuid from 'uuid/v4';
export const messageTime = 3000;
const delay = promisify((time, callback) => setTimeout(callback, time));
export default {
    state : {
        messages : {}
    },
    mutations : {
        localSubmitMessage(state, message) {
            Vue.set(state.messages, message.key, message);
        },
        [REMOVE_MESSAGE](state, key) {
            Vue.delete(state.messages, key);
        }
    },
    getters : {
        messages : ({messages}) => Object.values(messages)
    },
    actions : {
        [SUBMIT_ERRORS]: async function({commit}, errorTextArray) {
            const errorMessages = errorTextArray.map((text) => {
                return {
                    text,
                    error : true,
                    key : uuid()

                };
            });
            
            errorMessages.forEach((error) => commit('localSubmitMessage', error));

            await delay(messageTime);

            errorMessages.forEach((error) => commit(REMOVE_MESSAGE, error.key));
            
        },
        [SUCCESS_MESSAGE]: async function({commit}, text) {
            const message = {
                text,
                success: true,
                key : uuid()
            };
            commit('localSubmitMessage', message);
            await delay(messageTime);
            commit(REMOVE_MESSAGE, message.key);
        }
    }
};