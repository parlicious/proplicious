<template>
    <li>
        <span class="flag">{{country.flag}}</span>
        <span>{{country.name}}</span>
    </li>
</template>

<script>
export default {
    props : {
        country : Object
    }
}
</script>