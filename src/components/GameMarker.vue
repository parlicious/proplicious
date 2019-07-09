<template>
    <div :result="match.result">
        <p>{{ match.opponent }}</p>
        <p>{{ matchTime }}</p>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    props : {
        match : {
            type : Object,
            required : true
        }
    },
    computed : {
        matchTime(){
            return moment(this.match.match.time.millis).format('ddd, MMM Do @ h:mm a');
        }
    }
};
</script>
