<template>
    <v-container fluid>
        <v-card class="pa-3">
            <v-card-title>Instructions</v-card-title>
            <v-card-text>
                Select <span class="heavy">{{ numCallsRequired }} nations</span> that you belive will win
                <span class="heavy">more</span> games than the listed number and <span class="heavy">{{ numPutsRequired }} nations</span>
                that you believe will win <span class="heavy">fewer</span> games than the listed number.  Draws are rare
                in rugby but can happen during the group stage, in that case, each team will be
                award half of a win.
            </v-card-text>
        </v-card>
        <v-layout
            align-start
            justify-space-around
            row
            wrap
        >
            <pool-card 
                v-for="(countries, letter) in pools"
                :key="letter"
                :countries="countries"
                :letter="letter"
            />
        </v-layout>
    </v-container>
</template>
<script>
import PoolCard from './PoolCard.vue';
import pools from '../data/pools';
import { numCallsRequired, numPutsRequired } from '../data/settings';
import { VContainer, VCard, VCardTitle, VLayout, VCardText } from 'vuetify/lib';
export default {
    components : {
        PoolCard,
        VContainer,
        VCard,
        VCardTitle,
        VLayout,
        VCardText
    },
    data : () => { 
        return { 
            pools,
            numCallsRequired,
            numPutsRequired
        };
    }
};
</script>
<style lang="sass" scoped>
span {
    &.heavy {
        font-weight: bold;
    }
}
</style>

