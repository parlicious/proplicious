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
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : rgba($accent-desat, .6);
    padding : 4em;
}
</style>


