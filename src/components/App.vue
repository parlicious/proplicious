<template>
    <div>
        <div>
            <router-link to="/">
                Home
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
        <router-view />
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

<style lang="sass">
@import '../variables.scss';
body {
    font-family: sans-serif;
    font-size: 120%;
    background: $bg;
}
</style>

<style lang="sass" scoped>
    .submit-btn {
        font-size : 120%;
        border-radius : .3em;
    }
</style>

