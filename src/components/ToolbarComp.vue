<template>
    <div class="toolbar">
        <router-link to="/">
            <div class="rwc-pics">
                <img src="../../static/img/rwc2019-logo-symbol.png">
                <img src="../../static/img/rwc2019-logo-text-black.png">
            </div>
        </router-link>
        <router-link 
            to="/"
            tag="button"
            class="nav-link"
            :class="{selected: onPicks}"
        >
            Picks
        </router-link>
        <router-link 
            to="/results"
            tag="button"
            class="nav-link"
            :class="{selected:onResults}"
        >
            Results
        </router-link>
        <transition name="fade">
            <submission-form v-if="onPicks" />
        </transition>
    </div>
</template>
<script>
import SubmissionForm from './SubmissionForm.vue';
export default {
    components : {
        SubmissionForm
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

<style lang="sass" scoped>
.rwc-pics {
    width : 80px;
    display : inline-block;
    margin-right : 2em;
    img {
        width: 100%;
    }
}
.toolbar {
    position: relative;
    border-bottom : 1px solid black;
    .submit-form {
        &.fade-enter-active {
            transition-delay: .5s;
        }
    }
}
</style>