<template>
    <div class="app-wrapper">
        <toolbar-comp />
        <router-view />
        <load-screen 
            v-if="getSubmittedPicks" 
            :picks="getSubmittedPicks"
        />
    </div>
</template>
<script>
import ToolbarComp from './ToolbarComp.vue';
import LoadScreen from './LoadScreen.vue';
import { mapGetters } from 'vuex';
export default {
    components : { ToolbarComp, LoadScreen },
    computed : {
        ...mapGetters(['getSubmittedPicks'])
    }
};
</script>

<style lang="sass">
@import '../variables.scss';
body {
    font-family: sans-serif;
    font-size: 120%;
    background: $bg;
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
