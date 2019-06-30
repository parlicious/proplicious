import Vue from 'vue';
import Vuex from 'vuex';
import picksModule from './picksModule';
import userModule from './userModule';
import messageModule from './messageModule';
import {SUBMIT_PICKS, SUCCESS_MESSAGE} from './actionTypes';
Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        submittedPicks : null
    },
    mutations : {
        setSubmittedPicks : (state, submittedPicks) => state.submittedPicks = submittedPicks
    },
    getters : {
        getSubmittedPicks : ({submittedPicks}) => submittedPicks
    },
    modules : {
        picksModule,
        userModule,
        messageModule
    },
    actions : {
        [SUBMIT_PICKS] : async function({commit, getters}) {
            commit('setSubmittedPicks', getters.picks);
            //TODO: Donnie magic to persist pick
            setTimeout(() => {
                commit('setSubmittedPicks', null);
                commit(SUCCESS_MESSAGE, 'Picks Submitted');
            }, 6000);
        }
    }
});