<template>
    <li>
        <span class="flag">{{country.flag}}</span>
        <span class="name">{{country.name}}</span>
        <span class="ew">{{country.ew}}</span>
    </li>
</template>

<script>
export default {
    props : {
        country : Object
    }
}
</script>
<style lang="sass" scoped>
@import '../variables.scss';
li {
    background-color: $pink;
    line-height : 1.3em;
    padding : .2em 0;
}
.ew {
    font-weight: bold;
    color : white;
    background : $pink-sat;
    border-radius : .5em;
    padding : 0 .3em;
    float : right;
    margin : 0 .5em;
}
</style>
