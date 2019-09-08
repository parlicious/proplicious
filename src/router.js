import Vue from 'vue';
import PoolViewWrapper from './components/PoolViewWrapper.vue';
import ResultsView from './components/ResultsView.vue';
import StandingsView from './components/StandingsView.vue';
import VueRouter from 'vue-router';
import WelcomeView from './components/WelcomeView.vue';

Vue.use(VueRouter);

const Router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: WelcomeView, name: 'welcome' },
        { path: '/picks', component: PoolViewWrapper, name: 'picks' },
        { 
            path: '/results',
            component: ResultsView, 
            name: 'results'
              
        },
        { path: '/standings', component: StandingsView, name: 'standings'}
    ],
    scrollBehavior: (to) => new Promise(resolve => {
        const position = {};
        if (to.hash) {
          position.selector = to.hash;
        }
        Router.app.$root.$once('triggerScroll', () => {
            Router.app.$nextTick(() => resolve(position));
          });
      })
});

export default Router;