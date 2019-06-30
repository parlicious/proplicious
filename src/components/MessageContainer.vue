<template>
    <transition-group 
        tag="div" 
        class="message-container"
        name="fade"
    >
        <app-message
            v-for="message in messages"
            :key="message.key"
            :message="message"
        />
    </transition-group>
</template>
<script>
import AppMessage from './AppMessage.vue';
export default {
    components : { AppMessage },
    props : {
        messages : {
            type : Array,
            required : true
        }
    }
};
</script>
<style lang="sass" scoped>
.message-container {
    position : fixed;
    top : 0;
    left : 0;
    max-width : 100%;
    width : 20em;
    padding : .5em;
}
</style>


