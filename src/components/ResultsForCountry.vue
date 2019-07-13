<template>
    <div>
        <h3 class="team-name">
            {{ matchInfo.name }} 
            {{ matchInfo.results.W }}-{{ matchInfo.results.L }}-{{ matchInfo.results.D }}
        </h3>
        <button
            class="show-fixtures-btn"
            @click="toggleFixtures"
        >
            {{ showOrHide }} Fixtures
        </button>
        <transition-group
            v-if="showFixtures"
            class="marker-wrapper"
            tag="div"
            name="fade"
        >
            <GameMarker
                v-for="match in matchInfo.matches"
                :key="match.match.matchId"
                :match="match"
            />
        </transition-group>
    </div>
</template>

<script>
import GameMarker from './GameMarker.vue';
export default {
    components : {
        GameMarker
    },
    props : {
        matchInfo : {
            type : Object,
            required : true
        }
    },
    data : () => ({showFixtures : false}),
    computed : {
        showOrHide() {
            return this.showFixtures ? 'Hide' : 'Show';
        }
    },
    methods : {
        toggleFixtures() { this.showFixtures = !this.showFixtures; }
    }
};
</script>

<style lang="sass" scoped>
.marker-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content : space-around;
    max-width : 1000px;
    margin : 0 auto;

    .game-marker {
        flex : 1 0 auto;
        max-width : 200px;
    }
}
</style>

