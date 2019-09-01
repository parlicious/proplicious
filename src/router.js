import Vue from 'vue';
import PoolView from './components/PoolView.vue';
import ResultsView from './components/ResultsView.vue';
import StandingsView from './components/StandingsView.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: PoolView, name: 'picks' },
        { path: '/results', component: ResultsView, name: 'results' },
        { path: '/standings', component: StandingsView, name: 'standings'}
    ]
});