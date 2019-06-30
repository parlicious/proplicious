import Vue from 'vue';
import PoolView from './components/PoolView.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: PoolView }
    ]
});