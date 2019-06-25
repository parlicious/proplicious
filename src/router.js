import Vue from 'vue';
import PoolView from './components/PoolView.vue';
import PageTwo from './components/PageTwo.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: PoolView },
        { path: '/page-two', component: PageTwo }
    ]
});