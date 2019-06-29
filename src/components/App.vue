<template>
    <div class="app-wrapper">
        <toolbar-comp />
        <router-view />
    </div>
</template>
<script>
import ToolbarComp from './ToolbarComp.vue';
export default {
    components : { ToolbarComp }
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
