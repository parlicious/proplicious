<template>
    <div>
        <router-link to="/">
            <div class="rwc-pics">
                <img src="../../static/img/rwc2019-logo-symbol.png">
                <img src="../../static/img/rwc2019-logo-text-black.png">
            </div>
        </router-link>
        <submission-form />
    </div>
</template>
<script>
import SubmissionForm from './SubmissionForm.vue';
export default {
    components : {
        SubmissionForm
    }
};
</script>

<style lang="sass" scoped>
.rwc-pics {
    width : 80px;
    display : inline-block;
    img {
        width: 100%;
    }
}
</style>