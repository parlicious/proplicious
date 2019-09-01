<template>
    <div class="standings-view">
        <h3
            v-if="!standings"
            class="load"
        >
            Loading...
        </h3>
        <transition name="fade">
            <v-container
                v-if="standings"
            >
                <v-list :dense="true">
                    <standings-row
                        v-for="row in standings"
                        :key="row.name"
                        :contestant="row"
                    />
                </v-list>
            </v-container>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FETCH_STANDINGS } from '../store/actionTypes';
import { VContainer, VList } from 'vuetify/lib';
import StandingsRow from './StandingsRow.vue';
export default {
    components : {
        VContainer,
        VList,
        StandingsRow
    },
    computed : {
        ...mapGetters([
            'standings'
        ])
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
