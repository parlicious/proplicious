<template>
    <ul class="country-summary">
        <li>
            <span class="label">Record</span>
            {{ info.results.W }}-{{ info.results.L }}-{{ info.results.D }}
        </li>
        <li>
            <span class="label">Points</span>
            {{ info.currentPoints }}
        </li>
        <li>
            <span class="label">Expected</span>
            {{ info.ew }}
        </li>
        <li>
            <span class="label">Value</span>
            <span 
                class="value"
                :class="{ underPerforming, overPerforming }"
            >{{ info.value }}</span>
        </li>
    </ul>
</template>
<script>
export default {
    props : {
        info : {
            type : Object,
            required : true
        }
    },
    computed : {
        underPerforming() {
            return this.info.ew > this.info.currentPoints;
        },
        overPerforming() {
            return this.info.ew < this.info.currentPoints;
        }
    }
};
</script>
<style lang="sass" scoped>
@import '../variables.scss';
    .country-summary {
        margin-top : 0;
        .label {
            font-weight : bold;
            width : 5em;
            display : inline-block;
            position : relative;
            &:after{
                content : ":";
                position : absolute;
                right : 0;
            }
        }
        .value {
            font-weight : bold;
            &.overPerforming {
                color : $positive-dark
            }
            &.underPerforming {
                color : $negative-dark
            }
        }
    }
</style>
