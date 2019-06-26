import Vue from 'vue';
import Vuex from 'vuex';
import { PLACE_PUT, REMOVE_PUT, PLACE_CALL, REMOVE_CALL } from './mutationTypes';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        calls : new Set(['Ireland']),
        puts : new Set(['Japan'])
    },
    mutations : {
        [PLACE_CALL] : (state, country) => state.calls.add(country.name),
        [REMOVE_CALL] : (state, country) => state.calls.delete(country.name),
        [PLACE_PUT] : (state, country) => state.puts.add(country.name),
        [REMOVE_PUT] : (state, country) => state.puts.delete(country.name)
    },
    getters : {
        hasCallOnCountry : (state) => (country) => state.calls.has(country.name),
        hasPutOnCountry : (state) => (country) => state.puts.has(country.name)
    }
});