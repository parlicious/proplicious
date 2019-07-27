import Vue from 'vue';
import router from './router';
import App from './components/App.vue';
import store from './store';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);
new Vue({
    router,
    store,
    el : '#app',
    render : h => h(App)
});