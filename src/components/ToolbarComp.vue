<template>
    <div>
        <router-link to="/">
            <div class="rwc-pics">
                <img src="../../static/img/rwc2019-logo-symbol.png">
                <img src="../../static/img/rwc2019-logo-text-black.png">
            </div>
        </router-link>
        <router-link
            to="submit"
            :disabled="invalid"
            tag="button"
            class="submit-btn"
        >
            Submit
        </router-link>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters([
            'callCount',
            'putCount'
        ]),
        invalid() {
            return this.callCount !== 3 || this.putCount !== 3;
        }
    }
};
</script>

<style lang="sass" scoped>
    @import '../variables.scss';
    .rwc-pics {
        width : 80px;
        display : inline-block;
        img {
            width: 100%;
        }
    }
    .submit-btn {
        font-size : 120%;
        border-radius : 1.2em;
        background : $accent;
        color : white;
        padding : .4em;
        border: none;
        cursor:pointer;
        float: right;
        margin : 1em;
        &[disabled] {
            background: $accent-desat;
            cursor: auto;
        }
    }
</style>