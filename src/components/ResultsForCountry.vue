<template>
    <div>
        <h3 class="team-name">
            {{ matchInfo.name }}
        </h3>
        <GameMarker
            v-for="match in matchInfo.matches"
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
        matchInfo : {
            type : Object,
            required : true
        }
    }
};
</script>
