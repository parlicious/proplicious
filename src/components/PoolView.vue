<template>
    <div>
        <pool-div 
            v-for="(countries, letter) in pools"
            :countries=countries
            :letter=letter
            :key=letter
            />
    </div>
</template>
<script>
import PoolDiv from './PoolDiv.vue';
import pools from '../data/pools';
export default {
    data : () => { return { pools }},
    components : {
        PoolDiv
    }
}
</script>

