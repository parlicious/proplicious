<template>
    <div class="results-view">
        <h3
            v-if="!matchesByTeam"
            class="load"
        >
            Loading...
        </h3>
        <transition-group 
            name="fade"
            tag="div"
            class="results-wrapper"
        >
            <results-for-country
                v-for="matchInfo in sortedMatches"
                :key="matchInfo.name"
                :match-info="matchInfo"
            />
        </transition-group>
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
                ['currentPoints', 'possiblePoints', 'ew'], 
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
<style lang="sass" scoped>
    .results-wrapper {
        display : flex;
        flex-flow : row wrap;
        justify-content : space-evenly;
        align-items : flex-start;
    }
</style>
