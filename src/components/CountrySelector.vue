<template>
    <div class="selector-wrapper">
        <div 
            class="selector" 
            :class="upClass"
        >
            &#xe800;
            <span class="click-holder" v-on:click="upClicked" />
        </div>
        <div
            class="selector"
            :class="downClass"
        >
            &#xf0dd;
            <span class="click-holder" v-on:click="downClicked" />
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { PLACE_CALL, REMOVE_CALL, PLACE_PUT, REMOVE_PUT } from '../store/mutationTypes';
export default {
    props : {
        country : Object
    },
    computed : {
        ...mapGetters([
            'hasCallOnCountry',
            'hasPutOnCountry'
        ]),
        hasCall() { 
            return this.hasCallOnCountry(this.country);
        },
        upClass () {
            return this.hasCall ?
                'call' : 'not-call';
        },
        hasPut() { return this.hasPutOnCountry(this.country)},
        downClass () {
            return this.hasPut ?
                'put' : '';
        }
    },
    methods : {
        ...mapMutations([
            PLACE_CALL,
            PLACE_PUT,
            REMOVE_CALL,
            REMOVE_PUT
        ]),
        upClicked() {
            this.hasCall ? 
            this[REMOVE_CALL](this.country) : 
            this[PLACE_CALL](this.country);
        },
        downClicked() {
            this.hasPut ? 
            this[REMOVE_PUT](this.country) :
            this[PLACE_PUT](this.country);
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
        position : relative;
        line-height : .5em;
        &.call {
            color : limegreen;
        }
        &.put {
            color : red;
        }
        .click-holder {
            cursor : pointer;
            position : absolute;
            left : 0px;
            right : 0px;
            top : 3px;
            bottom : -3px;
            display : inline-block;
            z-index : 2;
        }
    }
}
</style>