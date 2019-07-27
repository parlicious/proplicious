<template>
    <v-card class="ma-3 pool-card">
        <v-card-title>
            <v-toolbar :color="color.base">
                <v-toolbar-title class="white--text">
                    Pool {{ letter }}
                </v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-text :color="color.lilghten3">
            <ul class="country-list">
                <country-list-item
                    v-for="country in countries"
                    :key="country.name"
                    :country="country"
                    :pool="letter"
                />
            </ul>
        </v-card-text>
    </v-card>
</template>
<script>
import CountryListItem from './CountryListItem.vue';
import { VCard, VCardTitle, VToolbar, VToolbarTitle } from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors';
export default {
    components : {
        CountryListItem,
        VCard,
        VCardTitle,
        VToolbar,
        VToolbarTitle
    },
    props : {
        countries : {
            type :Array,
            default : () => []
        },
        letter : {
            type: String,
            default: 'A'
        }
    },
    computed : {
        color() {
            switch(this.letter) {
                case 'B':
                    return colors.red;
                case 'C':
                    return colors.green;
                case 'D':
                    return colors.purple;
                case 'A':
                default:
                    return colors.blue;
            }
        }
    }
};
</script>
<style lang="sass" scoped>
.pool-card {
    width : 15em;
    max-width : 30em;
    font-size: 150%;
    flex : 1 0 auto;
    .country-list {
        list-style: none;
        padding : 16px;
    }
}
</style>

