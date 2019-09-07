import Vue from 'vue';
import Vuex from 'vuex';
import picksModule from './picksModule';
import userModule from './userModule';
import messageModule from './messageModule';
import resultsModuleBuilder from './resultsModuleBuilder';
import standingsModule from './standingsModule';
import {SUBMIT_PICKS, SUCCESS_MESSAGE, SUBMIT_ERRORS} from './actionTypes';
import { submitPicks } from '../utils';
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
        messageModule,
        resultsModule : resultsModuleBuilder(1558, 1568976300000),
        standingsModule
    },
    actions : {
        [SUBMIT_PICKS] : function({commit, getters, dispatch}) {
            commit('setSubmittedPicks', getters.picks);
            submitPicks(getters.picks, getters.getUser)
                .then(successMessage => dispatch(SUCCESS_MESSAGE, successMessage))
                .catch(errorMessage => dispatch(SUBMIT_ERRORS, [errorMessage]))
                .finally(() => commit('setSubmittedPicks', null));
        }
    }
});