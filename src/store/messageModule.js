import { SUBMIT_ERRORS, SUCCESS_MESSAGE } from './actionTypes';
import { REMOVE_MESSAGE } from './mutationTypes';
import Vue from 'vue';
import * as uuid from 'uuid/v4';
export const messageTime = 3000;
import { delay } from '../utils';

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
        [SUBMIT_ERRORS]: function({commit}, errorTextArray) {
            const errorMessages = errorTextArray.map((text) => {
                return {
                    text,
                    error : true,
                    key : uuid()

                };
            });
            
            errorMessages.forEach((error) => commit('localSubmitMessage', error));

            delay(messageTime)
                .then(() => errorMessages.forEach((error) => commit(REMOVE_MESSAGE, error.key)));
            
        },
        [SUCCESS_MESSAGE]: function({commit}, text) {
            const message = {
                text,
                success: true,
                key : uuid()
            };
            commit('localSubmitMessage', message);
            delay(messageTime)
                .then(() => commit(REMOVE_MESSAGE, message.key));
        }
    }
};