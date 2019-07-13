<template>
    <div 
        class="game-marker" 
        :result="match.result"
    >
        <p>
            <span 
                v-if="matchComplete"
                class="result"
            >{{ match.result }} 
            </span>vs {{ match.opponent }}
        </p>
        <p>{{ matchTime }}</p>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    props : {
        match : {
            type : Object,
            required : true
        }
    },
    computed : {
        matchTime(){
            return moment(this.match.match.time.millis).format('ddd, MMM Do @ h:mm a');
        },
        matchComplete() {
            return this.match.result === 'W' ||
                this.match.result === 'L' ||
                this.match.result === 'D';
        }
    }
};
</script>
<style lang="sass" scoped>
    @import '../variables.scss';

    @keyframes shifting {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: calc(150px + 1em) 0;
        }
    }
    .game-marker {
        display : inline-block;
        font-size : 60%;
        margin : 1em;
        padding : .5em;
        border-radius : .5em;
        width : 150px;
        border : 3px solid darkgrey;

        &[result=U] {
            background : lightgrey;
        }
        &[result=W] {
            background : $positive-light;
            border-color : $positive;
        }
        &[result=L] {
            background : $negative-light;
            border-color : $negative;
        }
        &[result=D] {
            background: $neutral-light;
            border-color: $neutral;
        }
        &[result=Winning] {
            animation : shifting 5s linear 0s infinite;
            border-color: $positive;
            background: repeating-linear-gradient(
                90deg,
                $positive-light,
                $bg 50%,
                $positive-light 100%
            );
        }
        &[result=Losing] {
            animation : shifting 5s linear 0s infinite;
            border-color: $negative;
            background: repeating-linear-gradient(
                90deg,
                $negative-light,
                $bg 50%,
                $negative-light 100%
            );
        }
        &[result=Tied] {
            animation : shifting 5s linear 0s infinite;
            border-color: $neutral;
            background: repeating-linear-gradient(
                90deg,
                $neutral-light,
                $bg 50%,
                $neutral-light 100%
            );
        }
        .result {
            font-weight : bold;
        }
    }
</style>
