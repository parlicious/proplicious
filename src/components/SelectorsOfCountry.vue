<template>
    <v-list :dense="true">
        <v-list-tile
            v-for="contestant in contestants"
            :key="contestant.name"
        >
            <v-list-tile-title>{{ contestant.name }}</v-list-tile-title>
        </v-list-tile>
    </v-list>
</template>

<script>
import {VList, VListTile, VListTileTitle} from 'vuetify/lib';
import { mapGetters, mapActions } from 'vuex';
import { FETCH_STANDINGS } from '../store/actionTypes';
export default {
    components : {
        VList,
        VListTile,
        VListTileTitle
    },
    props: {
        country : {
            type : Object,
            required : true
        },
        calls : {
            type : Boolean,
            required: true
        }
    },
    computed : {
        ...mapGetters([
            'standings',
            'putsForCountry',
            'callsForCountry'
        ]),
        contestants() {
            return this.calls ?
                this.callsForCountry(this.country.name) || [] :
                this.putsForCountry(this.country.name) || [];
        }

    },
    created() {
        if(!this.standings) {
            this[FETCH_STANDINGS]();
        }
    },
    methods : {
        ...mapActions([FETCH_STANDINGS])
    }
};
</script>
