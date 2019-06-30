<template>
    <h1 
        class="flag-list" 
        :class="extraClass"
    >
        <span 
            v-for="(flag, index) in flags" 
            :key="index"
            class="flag"
        >
            {{ flag }}
        </span>
    </h1>
</template>
<script>
import countries from '../data/countries';
export default {
    props : {
        positive : {
            type : Boolean,
            default : true
        },
        names : {
            type : Array,
            required : true
        }
    },
    computed : {
        flags() {
            return this.names.map(name => countries[name].flag);
        },
        extraClass() {
            return this.positive ? 'positive' : 'negative';
        }
    }
};
</script>
<style lang="sass">

    @keyframes slide {
        0% {
            transform : translateX(200px) rotate(25deg) translateY(-5px);
        }
        40%, 60% {
            transform : translateX(-10px);
        }
        60% {
            transform : translateX(10px);
        }
        100% {
            transform : translateX(-200px) rotate(25deg) translateY(-5px);
        }
        0%, 100% {
            opacity : 1;
        }
    }
    h1.flag-list {
        margin : 10px auto;
        max-width : 200px;
        border-radius : 10px;
        overflow: hidden;
        border : 3px solid black;
        text-align : center;
        &.positive {
            background : lighten(limeGreen, 40%);
            border-color : limeGreen;
        }
        &.negative {
            background : lighten(red, 40%);
            border-color : red;
        }
        .flag {
            display : inline-block;
            animation-name : slide;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            opacity : 0;

            @for $i from 1 through 4 {
                &:nth-of-type(#{$i}) {
                animation-delay: #{$i * 0.1}s;
            } }
        }
    }
</style>



