<template>
    <v-list 
        two-line
        dense
    >
        <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title class="font-weight-bold">
                    Record
                </v-list-tile-title>
                <v-list-tile-sub-title>
                    {{ info.results.W }}-{{ info.results.L }}-{{ info.results.D }}
                </v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title class="font-weight-bold">
                    Points
                </v-list-tile-title>
                <v-list-tile-sub-title>
                    {{ info.currentPoints }}
                </v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title class="font-weight-bold">
                    Expected
                </v-list-tile-title>
                <v-list-tile-sub-title>
                    {{ info.ew }}
                </v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title class="font-weight-bold">
                    Value
                </v-list-tile-title>
                <v-list-tile-sub-title>{{ info.value }}</v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>
<script>
import { VList, VListTile, VListTileTitle, VListTileSubTitle, VListTileContent } from 'vuetify/lib';
export default {
    components : {
        VList,
        VListTile,
        VListTileTitle,
        VListTileSubTitle,
        VListTileContent
    },
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
.value {
    font-weight : bold;
    &.overPerforming {
        color : $positive
    }
    &.underPerforming {
        color : $negative
    }
}
</style>
