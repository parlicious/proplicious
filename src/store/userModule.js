import { SET_EMAIL, SET_PASSWORD, SET_NAME } from './mutationTypes';
export default {
    state : {
        email : '',
        password : '',
        name: ''
    },
    mutations : {
        [SET_EMAIL] : (state, email) => state.email = email,
        [SET_PASSWORD] : (state, password) => state.password = password,
        [SET_NAME] : (state, name) => state.name = name

    },
    getters : {
        getUser : ({email, password, name}) => { return {email, password, name};}
    }
};