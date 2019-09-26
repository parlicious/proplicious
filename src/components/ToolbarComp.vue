<template>
    <v-toolbar app>
        <v-toolbar-side-icon @click="toggleDrawer" />
        <v-toolbar-items>
            <v-btn 
                to="/"
                flat
                active-class=""
                class="hidden-sm-and-down"
            >
                <v-img 
                    :src="require('../../static/img/rwc2019-logo-symbol.png')"
                    contain
                />
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-title to="/">
            <router-link 
                to="/"
                tag="span"
                class="toolbar-title"
            >
                Proplicious
            </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                v-if="showPicks"
                to="/picks"
                flat
            >
                Picks
            </v-btn>
            <v-btn 
                to="/standings"
                flat
            >
                Standings
            </v-btn>
            <v-btn 
                to="/chart"
                flat
            >
                Chart
            </v-btn>
            <v-btn 
                to="/results"
                flat
            >
                Results
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
import { VToolbar, VToolbarItems, VBtn, VToolbarSideIcon, VSpacer, VImg, VToolbarTitle } from 'vuetify/lib';
import { mapGetters } from 'vuex';
export default {
    components : {
        VToolbar,
        VToolbarItems,
        VBtn,
        VToolbarSideIcon,
        VSpacer,
        VImg,
        VToolbarTitle
    },
    props : {
        toggleDrawer : {
            type : Function,
            required : true
        }
    },
    computed : {
        ...mapGetters(['firstMatchTime']),
        showPicks() {
            return this.firstMatchTime > Date.now();
        }
    }
};
</script>
<style lang="sass" scoped>
.toolbar-title {
    cursor: pointer;
}
</style>
