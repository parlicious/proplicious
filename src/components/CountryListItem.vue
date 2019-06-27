<template>
    <li>
        <span class="flag">{{ country.flag }}</span>
        <span class="name">{{ country.name }}</span>
        <span
            class="ew"
            :class="pool"
        >{{ country.ew }}
            <country-selector :country="country" />
        </span>
    </li>
</template>

<script>
import CountrySelector from './CountrySelector.vue';
export default {
    components : {
        CountrySelector
    },
    props : {
        country : {
            type : Object,
            default : () => {}
        },
        pool : {
            type : String,
            default : 'A'
        }
    }
};
</script>
<style lang="sass" scoped>
@import '../variables.scss';
li {
    line-height : 1.3em;
    padding : .2em 0;

}

.ew {
    font-weight: bold;
    color : white;
    background : $colora;
    border-radius : .5em;
    padding : 0 .3em;
    float : right;
    margin : 0 .5em;
    &.B {
        background: $colorb;
    }
    &.C {
        background: $colorc;
    }
    &.D {
        background: $colord;
    }
}

</style>

