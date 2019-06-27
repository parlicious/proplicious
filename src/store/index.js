import Vue from 'vue';
import Vuex from 'vuex';
import { PLACE_PUT, REMOVE_PUT, PLACE_CALL, REMOVE_CALL } from './mutationTypes';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        calls : new Set(),
        puts : new Set()
    },
    mutations : {
        [PLACE_CALL] : (state, country) => {
            state.calls = new Set([...state.calls, country.name]);
            state.puts.delete(country.name);
            state.puts = new Set([...state.puts]);
        },
        [REMOVE_CALL] : (state, country) => {
            state.calls.delete(country.name);
            state.calls = new Set([...state.calls]);
        },
        [PLACE_PUT] : (state, country) => {
            state.puts.add(country.name);
            state.puts = new Set(state.puts);
            state.calls.delete(country.name);
            state.calls = new Set(state.calls);
        },
        [REMOVE_PUT] : (state, country) => {
            state.puts.delete(country.name);
            state.puts = new Set(state.puts);
        }
    },
    getters : {
        hasCallOnCountry : (state) => (country) => state.calls.has(country.name),
        hasPutOnCountry : (state) => (country) => state.puts.has(country.name)
    }
});