<template>
    <div :class=letter>
        <h3>Pool {{letter}}</h3>
        <ul>
            <country-list-item v-for="country in countries" :key="country.name" :country="country" :pool="letter" />
        </ul>
    </div>
</template>
<script>
import CountryListItem from './CountryListItem.vue';
export default {
    props : {
        countries : Array,
        letter    : String
    },
    components : {
        CountryListItem
    }
}
</script>
<style lang="sass" scoped>
    @import '../variables.scss';
    h3 {
        font-size : 22pt;
        margin : 0 0 .5em 0;
    }
    ul {
        margin : 0;
        list-style: none;
        padding : 0;
        font-size: 20pt;
    }
    div {
        display: inline-block;
        margin: 1em;
        padding:  .5em;
        background-color: $colora-desat;
        border-radius: .5em;
        width : 20em;

        .B {
            background-color: $colorb-desat;
        }

        .C {
            background-color: $colorc-desat;
        }

        .D {
            background-color: $colord-desat;
        }
    }
</style>


