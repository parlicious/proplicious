import { SUBMIT_ERRORS, SUCCESS_MESSAGE } from './mutationTypes';
export const messageTime = 3000;
export default {
    state : {
        messages : [],
        totalMessages : 0
    },
    mutations : {
        [SUBMIT_ERRORS](state, errorArray) {
            if(!errorArray || !errorArray.length) {
                return;
            }
            errorArray.forEach((message, index) => {
                state.messages.push({
                    message,
                    error : true,
                    key : index + state.totalMessages
                });
            });
            state.totalMessages += errorArray.length;
            setTimeout(() => state.messages = state.messages.slice(errorArray.length),
            messageTime);
        },
        [SUCCESS_MESSAGE](state, message) {
            state.totalMessages += 1;
            state.messages.push({
                message,
                key : state.totalMessages,
                success : true
            });
            setTimeout(() => state.messages = state.messages.shift(), messageTime);
        }
    },
    getters : {
        messages : ({messages}) => messages
    }
};