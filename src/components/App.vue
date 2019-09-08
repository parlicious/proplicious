<template>
    <v-app>
        <v-navigation-drawer 
            v-model="drawer"
            app
            :disable-resize-watcher="true"
        >
            <v-list dense>
                <v-list-tile 
                    v-if="showPools"
                    to="/picks"
                >
                    <v-list-tile-content>Picks</v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/standings">
                    <v-list-tile-content>Standings</v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/results">
                    <v-list-tile-content>Results</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <toolbar-comp :toggle-drawer="toggleDrawer" />
        <v-content>
            <v-fade-transition 
                mode="out-in" 
                @after-leave="$root.$emit('triggerScroll')"
            >
                <router-view />
            </v-fade-transition>
        </v-content>
        <transition name="fade">
            <load-screen 
                v-if="getSubmittedPicks" 
                :picks="getSubmittedPicks"
            />
        </transition>
        <message-container
            :messages="messages" 
        />
    </v-app>
</template>
<script>
import ToolbarComp from './ToolbarComp.vue';
import LoadScreen from './LoadScreen.vue';
import MessageContainer from './MessageContainer.vue';
import { mapGetters } from 'vuex';
import { VApp, VContent, VFadeTransition, VNavigationDrawer, VList, VListTile, VListTileContent } from 'vuetify/lib';
export default {
    components : { 
        ToolbarComp,
        LoadScreen,
        MessageContainer,
        VApp,
        VContent,
        VFadeTransition,
        VNavigationDrawer,
        VListTile,
        VListTileContent,
        VList
    },
    data : () => ({ drawer: false}),
    computed : {
        ...mapGetters(['getSubmittedPicks', 'messages', 'firstMatchTime']),
        showPools() {
            return this.firstMatchTime > Date.now();
        }
    },
    methods : {
        toggleDrawer() {
            this.drawer = !this.drawer;
        }
    }
};
</script>
