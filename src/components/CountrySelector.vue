<template>
    <div class="selector-wrapper">
        <div 
            class="selector" 
            :class="upClass"
        >
            &#xe800;
            <span
                class="click-holder"
                @click="upClicked"
            />
        </div>
        <div
            class="selector"
            :class="downClass"
        >
            &#xf0dd;
            <span
                class="click-holder"
                @click="downClicked"
            />
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import { PLACE_CALL, REMOVE_CALL, PLACE_PUT, REMOVE_PUT } from '../store/mutationTypes';
export default {
    props : {
        country : {
            type : Object,
            default : () => {}
        },
        hasCall : {
            type : Boolean,
            required: true
        },
        hasPut : {
            type: Boolean,
            required: true
        }
    },
    computed: {
        downClass () {
            return this.hasPut ?
                'put' : '';
        },
        upClass () {
            return this.hasCall ?
                'call' : 'not-call';
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
};
</script>

<style lang="sass" scoped>
@import '../glyphs/css/glyphs.css';

@keyframes bounce {
    0% {
        color : white
    }
    25% {
        transform : translateY(-10px) scale(1.05);
    }
    50% {
        transform : translateY(0) scale(1);
        color : limegreen
    }
    75% {
        transform : translateY(-5px) scale(1.05);
    }
}

@keyframes drop {
    0% {
        color : white
    }
    25% {
        transform : translateY(10px) scale(1.1);
    }
    50% {
        transform : translateY(0) scale(1);
        color : red;
    }
    75% {
        transform : translateY(5px) scale(1.1);
    }
}

div.selector-wrapper {
    -webkit-user-select: none; /* Safari 3.1+ */
    -moz-user-select: none; /* Firefox 2+ */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Standard syntax */
    position : relative;
    top : 2px;
    font-family: 'glyphs';
    display : inline-block;
    .selector {
        position : relative;
        line-height : .5em;
        transition: color .25s;
        color : white;
        &:active{
            color : lightgrey;
            transition : none;
        }
        &.call {
            color : limegreen;
            animation: bounce .5s 1 ease-in-out;
            &:active {
                color : darken(limegreen, 15%);
                transition: none;
            }
        }
        &.put {
            color : red;
            animation: drop .5s 1 ease-in-out;
            &:active {
                color: darken(red, 15%);
                transition: none;
            }
        }
        .click-holder {
            user-select : none;
            cursor : pointer;
            position : absolute;
            left : 0px;
            right : 0px;
            top : 3px;
            bottom : -6px;
            display : inline-block;
            z-index : 2;
        }
    }
}
</style>