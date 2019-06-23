import Vue from 'vue';
import HelloVue from './components/HelloVue.vue';
import PageTwo from './components/PageTwo.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HelloVue },
        { path: '/page-two', component: PageTwo }
    ]
});