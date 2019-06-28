<template>
    <div class="pool-wrapper">
        <pool-div 
            v-for="(countries, letter) in pools"
            :key="letter"
            :countries="countries"
            :letter="letter"
        />
    </div>
</template>
<script>
import PoolDiv from './PoolDiv.vue';
import pools from '../data/pools';
export default {
    components : {
        PoolDiv
    },
    data : () => { return { pools };}
};
</script>
<style lang="sass" scoped>
.pool-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content : space-around;
}
</style>

