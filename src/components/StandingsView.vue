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
                <div>{{ standings }}</div>
            </v-container>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FETCH_STANDINGS } from '../store/actionTypes';
import { VContainer } from 'vuetify/lib';
export default {
    components : {
        VContainer
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
