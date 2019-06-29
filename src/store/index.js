import Vue from 'vue';
import Vuex from 'vuex';
import picksModule from './picksModule';
import userModule from './userModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        picksModule,
        userModule
    }
});