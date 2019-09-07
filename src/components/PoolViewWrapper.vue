<template>
    <div class="pool-view-wrapper">
        <pool-view v-if="showPools" />
        <v-card
            v-if="!showPools"
            class="ma-3"
        >
            <v-card-title primary-title>
                <div class="headline">
                    Uh Oh!
                </div>
            </v-card-title>
            <v-card-text>
                It looks like the event has started.  Why do you go check out the
                <router-link to="standings">
                    standings
                </router-link>
                or the
                <router-link to="results">
                    results
                </router-link>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { VCard, VCardTitle, VCardText } from 'vuetify/lib';
import PoolView from './PoolView.vue';
export default {
    components : {
        PoolView,
        VCard,
        VCardTitle,
        VCardText
    },
    computed : {
        ...mapGetters(['firstMatchTime']),
        showPools() {
            return this.firstMatchTime > Date.now();
        }
    }
};
</script>
