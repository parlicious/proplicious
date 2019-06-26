import Vue from 'vue';
import router from './router';
import App from './components/App.vue';
import store from './store';

new Vue({
    router,
    store,
    el : '#app',
    render : h => h(App)
});