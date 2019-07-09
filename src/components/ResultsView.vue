<template>
    <div class="results-view">
        <h3
            v-if="!matchesByTeam"
            class="load"
        >
            Loading
        </h3>
        <results-for-country
            v-for="matchInfo in sortedMatches"
            :key="matchInfo.name"
            :match-info="matchInfo"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { orderBy } from 'lodash';
import ResultsForCountry from './ResultsForCountry.vue';
import { REFRESH_RESULTS } from '../store/actionTypes';
export default {
    components : {
        ResultsForCountry
    },
    computed : {
        ...mapGetters([
            'matchesByTeam'
        ]),
        sortedMatches() {
            if(!this.matchesByTeam) {
                return [];
            }
            return orderBy(
                this.matchesByTeam, 
                ['results.W', 'results.possibleWins', 'ew'], 
                ['desc', 'desc', 'desc']);
        }
    },
    created() {
        if(!this.matchesByTeam) {
            this[REFRESH_RESULTS]();
        }
    },
    methods : {
        ...mapActions([REFRESH_RESULTS])
    }
};
</script>
