<template>
    <div class="load-screen">
        <flags-list 
            :names="picks.calls" 
            :positive="true" 
        />
        <flags-list 
            :names="picks.puts" 
            :positive="false" 
        />
    </div>
</template>
<script>
import FlagsList from './FlagsList.vue';
export default {
    components : { FlagsList },
    props : {
        picks : {
            type : Object,
            required : true
        }
    }
};
</script>
<style lang="sass" scoped>
@import '../variables.scss';
.load-screen {
    position : fixed;
    top : .5em;
    left : .5em;
    right : .5em;
    bottom : .5em;
    border : 5px solid $accent;
    border-radius : 5px;
    background : rgba($accent-desat, .6);
    padding : 2em;
}
</style>


