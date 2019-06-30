<template>
    <div>
        <p>
            Select <span class="heavy">{{ numCallsRequired }} nations</span> that you belive will win
            <span class="heavy">more</span> games than the listed number and <span class="heavy">{{ numPutsRequired }} nations</span>
            that you believe will win <span class="heavy">fewer</span> games than the listed number.  Draws are rare
            in rugby but can happen during the group stage, in that case, each team will be
            award half of a win.
        </p>
        <div class="pool-wrapper">
            <pool-div 
                v-for="(countries, letter) in pools"
                :key="letter"
                :countries="countries"
                :letter="letter"
            />
        </div>
    </div>
</template>
<script>
import PoolDiv from './PoolDiv.vue';
import pools from '../data/pools';
import { numCallsRequired, numPutsRequired } from '../data/settings';
export default {
    components : {
        PoolDiv
    },
    data : () => { 
        return { 
            pools,
            numCallsRequired,
            numPutsRequired
        };
    }
};
</script>
<style lang="sass" scoped>
@import '../variables.scss';
p {
    border: 3px solid $accent;
    background : $accent-desat;
    margin : 1em;
    padding : 1em;
    border-radius : .3em;
}
span {
    &.heavy {
        font-weight: bold;
    }
}
.pool-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content : space-around;
}
</style>

