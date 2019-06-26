<template>
    <div class="selector-wrapper">
        <div class="selector">&#xe800;</div>
        <div class="selector">&#xf0dd;</div>
    </div>
</template>
<style lang="sass" scoped>
@import '../glyphs/css/glyphs.css';
div.selector-wrapper {
    position : relative;
    top : 2px;
    font-family: 'glyphs';
    display : inline-block;
    .selector {
        line-height : .5em;
    }
}
</style>