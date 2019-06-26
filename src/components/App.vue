<template>
    <div>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="page-two">Page Two</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="sass">
@import '../variables.scss';
body {
    font-family: sans-serif;
    font-size: 120%;
    background: $bg;
}
</style>
