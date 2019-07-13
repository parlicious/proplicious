<template>
    <p 
        class="app-message" 
        :class="extraClass"
        @click="remove"
    >
        {{ message.text }}
    </p>
</template>
<script>
import { REMOVE_MESSAGE } from '../store/mutationTypes';
import { mapMutations } from 'vuex';
export default {
    props : {
        message : {
            type : Object,
            required : true
        }
    },
    computed : {
        extraClass() {
            const classes = [];
            if(this.message.error) {
                classes.push('error');
            }
            if(this.message.success) {
                classes.push('success');
            }  
            return classes;
        }
    },
    methods : {
        ...mapMutations([REMOVE_MESSAGE]),
        remove() {
            this[REMOVE_MESSAGE](this.message.key);
        }
    }
};
</script>
<style lang="sass" scoped>
@import '../variables.scss';
.app-message {
    background : $bg;
    border: 3px solid black;
    border-radius : 5px;
    padding : .5em;
    cursor : pointer;
    max-width : 100%;
    width : 19em;
    &.error {
        background : lighten(red, 45%);
        border-color : red;
        color : red;
    }
    &.success {
        background : lighten(limegreen, 45%);
        border-color: limegreen;
        color : limegreen;
    }

    &.fade-enter, &.fade-leave-to {
        transform: translateY(-15px);
    }
    &.fade-leave-active {
        position: absolute;
    }
}
</style>

