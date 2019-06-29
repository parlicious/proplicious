import { SET_EMAIL, SET_PASSWORD } from './mutationTypes';
export default {
    state : {
        email : '',
        password : ''
    },
    mutations : {
        [SET_EMAIL] : (state, email) => state.email = email,
        [SET_PASSWORD] : (state, password) => state.password = password
    },
    getters : {
        getUser : ({email, password}) => { return {email, password};}
    }
};