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
        <v-toolbar-title>Proplicious</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                to="/"
                flat
            >
                Picks
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
        page() {
            return this.$route.name;
        },
        onPicks () {
            return this.page === 'picks';
        },
        onResults(){
            return this.page === 'results';
        }
    }
};
</script>