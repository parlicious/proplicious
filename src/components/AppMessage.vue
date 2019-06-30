<template>
    <p 
        class="app-message" 
        :class="extraClass"
    >
        {{ message.message }}
    </p>
</template>
<script>
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

    &.fade-enter, .fade-leave-to {
        transform: translateY(-15px);
    }
}
</style>

