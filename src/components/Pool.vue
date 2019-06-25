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
<style lang="sass" scoped>
    h3 {
        font-size : 22pt;
        margin-bottom : 5px;
    }
    ul {
        margin : 0;
        list-style: none;
        padding : 0;
        font-size: 20pt;
    }
</style>


