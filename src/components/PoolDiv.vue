<template>
    <div :class="letter">
        <h3>Pool {{ letter }}</h3>
        <ul>
            <country-list-item
                v-for="country in countries"
                :key="country.name"
                :country="country"
                :pool="letter"
            />
        </ul>
    </div>
</template>
<script>
import CountryListItem from './CountryListItem.vue';
export default {
    components : {
        CountryListItem
    },
    props : {
        countries : {
            type :Array,
            default : () => []
        },
        letter : {
            type: String,
            default: 'A'
        }
    }
};
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
        flex : 1 0 auto;
        max-width: 30em;
        display: inline-block;
        margin: 1em;
        background-color: $colora-desat;
        border-radius: .5em;
        width : 18em;
        border: 4px solid $colora;
        h3 {
            color : white;
            background : $colora;
            padding : .5em;
        }
        ul {
            margin : .5em;
        }

        &.B {
            background: $colorb-desat;
            border-color: $colorb;
            h3 {
                background : $colorb;
            }
        }

        &.C {
            background-color: $colorc-desat;
            border-color: $colorc;
            h3 {
                background : $colorc;
            }
        }

        .D {
            background-color: $colord-desat;
            border-color: $colord;
            h3 {
                background: $colord;
            }
        }
    }
</style>


