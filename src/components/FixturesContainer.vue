<template>
    <div class="fixtures-container">
        <GameMarker
            v-for="match in matches"
            :key="match.match.matchId"
            :match="match"
        />
    </div>
</template>

<script>
import GameMarker from './GameMarker.vue';
export default {
    components : {
        GameMarker
    },
    props : {
        matches : {
            type : Array,
            required : true
        }
    }
};
</script>
<style lang="sass" scoped>
.fixtures-container {
    display: flex;
    flex-flow: row wrap;
    justify-content : space-around;
    max-width : 1000px;
    margin : 0 auto;
    position: relative;
}
</style>

