import Vue from 'vue';
import Vuex from 'vuex';
import picksModule from './picksModule';
import userModule from './userModule';

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
        userModule
    },
    actions : {
        submitPicks : async function({commit, getters}) {
            commit('setSubmittedPicks', getters.picks);
            //TODO: Donnie magic to persist pick
            setTimeout(() => {
                commit('setSubmittedPicks', null);
            }, 6000);
        }
    }
});