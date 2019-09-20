<template>
    <v-list-group 
        v-model="active"
        no-action
    >
        <template v-slot:activator>
            <v-list-tile>
                <v-list-tile-title>{{ `${place}. ${contestant.name || contestant.email}` }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ contestant.getPrettyScore() }}</v-list-tile-sub-title>
            </v-list-tile>
        </template>
        <v-list-tile
            v-for="item in callsAndPuts"
            :key="item.key"
        >
            <v-icon color="green">
                arrow_upward
            </v-icon>
            <v-list-tile-title>
                <router-link :to="'/results#' + item.call.name.replace(/\s/g, '-')">
                    {{ item.call.name }}
                </router-link>
            </v-list-tile-title>
            <v-list-tile-sub-title> {{ item.call.value }} </v-list-tile-sub-title>
            <v-icon color="red">
                arrow_downward
            </v-icon>
            <v-list-tile-title>
                <router-link :to="'/results#' + item.put.name.replace(/\s/g, '-')">
                    {{ item.put.name }}
                </router-link>
            </v-list-tile-title>
            <v-list-tile-sub-title> {{ item.put.value }} </v-list-tile-sub-title>
        </v-list-tile>
    </v-list-group>
</template>

<script>
import { VListGroup, VListTile, VListTileTitle, VListTileSubTitle, VIcon} from 'vuetify/lib';
export default {
    components : {
        VListGroup,
        VListTile,
        VIcon,
        VListTileTitle,
        VListTileSubTitle
    },
    props : {
        contestant : {
            type : Object,
            required : true
        },
        place : {
            type : Number,
            required : true
        }
    },
    data : () => ({
        active : false
    }),
    computed : {
        callsAndPuts : function() {
            const combined = [];
            for(let i = 0; i < this.contestant.getCalls().length; i++) {
                combined[i] = { 
                    call : this.contestant.getCalls()[i],
                    put : this.contestant.getPuts()[i],
                    key : i
                };
            }
            return combined;
        }
    }
};
</script>
