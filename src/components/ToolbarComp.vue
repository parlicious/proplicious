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
            tag="span"
            class="nav-link"
            :here="onPicks"
        >
            Picks
        </router-link>
        <router-link 
            to="/results"
            tag="span"
            class="nav-link"
            :here="onResults"
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
.nav-link {
    display: inline-block;
    cursor : pointer;
    margin : 0;
    padding : .5em;
    font-size : 120%;
    border-radius : 3px;
    margin-bottom : 10px;
    position : relative;
    transition : background .3s ease;
    &:hover {
        background : lightgrey;
    }
    &:active {
        background : grey;
    }
    &:after {
        transition: width .3s ease-out;
        content : "";
        width : 0%;
        display : block;
        margin : 0;
        border-bottom : 1px solid black;
    }
    &[here] {
        &:after {
            width : 100%;
            transition-delay: .5s;
        }
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