<template>
    <v-card 
        width="30em"
        class="ma-2"
    >
        <v-card-title>
            <v-toolbar 
                :id="country.name.replace(/\s/g, '-')"
                :color="country.primary"
                :class="textClass"
            >
                <v-toolbar-title class="country-name">
                    {{ matchInfo.name }}
                </v-toolbar-title>
                <template v-slot:extension>
                    <v-tabs
                        v-model="page"
                        :color="country.primary"
                        :slider-color="country.accent"
                    >
                        <v-tab :class="textClass">
                            Summary
                        </v-tab>
                        <v-tab :class="textClass">
                            Fixtures
                        </v-tab>
                        <v-tab :class="textClass">
                            Believers
                        </v-tab>
                        <v-tab :class="textClass">
                            Doubters
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <v-tabs-items v-model="page">
                <v-tab-item>
                    <country-summary :info="matchInfo" />
                </v-tab-item>
                <v-tab-item>
                    <fixtures-container :matches="matchInfo.matches" />
                </v-tab-item>
                <v-tab-item>
                    <selectors-of-country 
                        :country="country"
                        :calls="true"
                    />
                </v-tab-item>
                <v-tab-item>
                    <selectors-of-country 
                        :country="country"
                        :calls="false"
                    />
                </v-tab-item>
            </v-tabs-items>
        </v-card-text>
    </v-card>
</template>

<script>
import FixturesContainer from './FixturesContainer.vue';
import SelectorsOfCountry from './SelectorsOfCountry.vue';
import CountrySummary from './CountrySummary.vue';
import countries from '../data/countries';
import { VToolbar, VTabs, VTabsItems, VTabItem, VToolbarTitle, VTab, VCard, VCardText, VCardTitle } from 'vuetify/lib';
export default {
    components : {
        FixturesContainer,
        CountrySummary,
        VToolbar,
        VTabs,
        VToolbarTitle,
        VTabsItems,
        VTabItem,
        VTab,
        VCard,
        VCardText,
        VCardTitle,
        SelectorsOfCountry
    },
    props : {
        matchInfo : {
            type : Object,
            required : true
        }
    },
    data : () => ({page : 0}),
    computed : {
        country() { return countries[this.matchInfo.name];},
        textClass() {
            return (this.country.complementClass) || (this.country.complement+'--text');
        }
    },
    methods : {
        styleFor(body) {
            if(this.body === body) {
                return {
                    background : this.country.accent
                };
            }
        }
    }
};
</script>
