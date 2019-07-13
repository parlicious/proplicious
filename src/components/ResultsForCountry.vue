<template>
    <div>
        <h3 class="team-name">
            {{ matchInfo.name }}
        </h3>
        <div class="marker-wrapper">
            <GameMarker
                v-for="match in matchInfo.matches"
                :key="match.match.matchId"
                :match="match"
            />
        </div>
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

