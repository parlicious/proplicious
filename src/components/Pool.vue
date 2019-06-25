<template>
    <div>
        <h3>Pool {{letter}}</h3>
        <ul>
            <country v-for="country in countries" :key="country.name" :country="country" />
        </ul>
    </div>
</template>
<script>
import Country from './Country.vue';
export default {
    props : {
        countries : Array,
        letter    : String
    },
    components : {
        Country
    }
}
</script>

