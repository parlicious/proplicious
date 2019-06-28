<template>
    <div>
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