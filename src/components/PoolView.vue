<template>
    <div>
        <pool 
            v-for="(countries, letter) in pools"
            :countries=countries
            :letter=letter
            :key=letter
            />
    </div>
</template>
<script>
import Pool from './Pool.vue';
import pools from '../data/pools';
export default {
    data : () => { return { pools }},
    components : {
        Pool
    }
}
</script>

