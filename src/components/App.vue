<template>
    <div class="app-wrapper">
        <toolbar-comp />
        <transition
            name="fade"
            mode="out-in"
        >
            <router-view />
        </transition>
        <transition name="fade">
            <load-screen 
                v-if="getSubmittedPicks" 
                :picks="getSubmittedPicks"
            />
        </transition>
        <message-container 
            :messages="messages" 
        />
    </div>
</template>
<script>
import ToolbarComp from './ToolbarComp.vue';
import LoadScreen from './LoadScreen.vue';
import MessageContainer from './MessageContainer.vue';
import { mapGetters } from 'vuex';
export default {
    components : { ToolbarComp, LoadScreen, MessageContainer },
    computed : {
        ...mapGetters(['getSubmittedPicks', 'messages'])
    }
};
</script>

<style lang="sass">
@import '../variables.scss';
body {
    font-family: sans-serif;
    font-size: 120%;
    background: $bg;

    .fade-enter-active, .fade-leave-active, .fade-move {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
}
</style>
<style lang="sass" scoped>
@import '../variables.scss';
@media(max-width:$break){
    .app-wrapper {
        padding-bottom : 3.5em;
    }
}
</style>
