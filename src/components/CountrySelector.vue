<template>
    <div class="selector-wrapper">
        <div class="selector" :class="upClass">&#xe800;</div>
        <div class="selector" :class="downClass">&#xf0dd;</div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props : {
        country : Object
    },
    computed : {
        ...mapGetters([
            'hasCallOnCountry',
            'hasPutOnCountry'
        ]),
        upClass () {
            return this.hasCallOnCountry(this.country) ?
                'call' : 'not-call';
        },
        downClass () {
            return this.hasPutOnCountry(this.country) ?
                'put' : '';
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../glyphs/css/glyphs.css';
div.selector-wrapper {
    position : relative;
    top : 2px;
    font-family: 'glyphs';
    display : inline-block;
    .selector {
        line-height : .5em;
        &.call {
            color : limegit green;
        }
        &.put {
            color : red;
        }
    }
}
</style>