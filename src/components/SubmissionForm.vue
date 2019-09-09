<template>
    <v-form 
        class="submission-form"
        @submit.prevent="submitAttempt"
    >
        <v-text-field
            v-model="name"
            type="text"
            name="name"
            placeholder="Name"
            @keyup.enter="submitAttempt"
        />
        <v-text-field 
            v-model="email"
            type="email" 
            placeholder="Email"
            @keyup.enter="submitAttempt"
        />
        <v-text-field  
            v-model="password"
            type="password" 
            placeholder="Password"
            minlength="8"
            @keyup.enter="submitAttempt"
        />
        <v-btn
            class="mr-4"
            type="submit"
        >
            Submit
        </v-btn>
    </v-form>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { SET_EMAIL, SET_PASSWORD, SET_NAME } from '../store/mutationTypes';
import { SUBMIT_ERRORS, SUBMIT_PICKS } from '../store/actionTypes';
import { numCallsRequired, numPutsRequired } from '../data/settings';
import { VForm, VTextField, VBtn } from 'vuetify/lib';
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default {
    components : {
        VForm,
        VTextField,
        VBtn
    },
    computed : {
        ...mapGetters([
            'callCount',
            'putCount',
            'getUser'
        ]),
        email : {
            get() { return this.getUser.email; },
            set(val){ this[SET_EMAIL](val); }
        },
        password:{
            get() { return this.getUser.password; },
            set(val) { this[SET_PASSWORD](val); }
        },
        name:{
            get() { return this.getUser.name; },
            set(val) { this[SET_NAME](val); }
        },
        invalid() {
            return this.callCount !== 3 || this.putCount !== 3;
        }
    },
    methods : {
        ...mapMutations([
            SET_EMAIL,
            SET_PASSWORD,
            SUBMIT_ERRORS,
            SET_NAME
        ]),
        ...mapActions([
            SUBMIT_ERRORS,
            SUBMIT_PICKS
        ]),
        submitAttempt(){
            const errors = [];
            if(!emailRegex.test(this.email)) {
                errors.push('Enter a valid email address');
            }
            if(!this.password || this.password.length < 8) {
                errors.push('Enter a password of at least 8 characters');
            }
            if(this.callCount > numCallsRequired) {
                errors.push(`You have selected too many nations to overpreform.  Pick exactly ${numCallsRequired} to do better than the listed value.`);
            }
            if(this.callCount < numCallsRequired) {
                errors.push(`You have not selected enough nations to overpreform.  Select exactly ${numCallsRequired} nations who you think will do better than the listed value.`);
            }
            if(this.putCount > numPutsRequired) {
                errors.push(`You have selected too many nations to underpreform.  Pick exactly ${numPutsRequired} to do worse than the listed value.`);
            }
            if(this.putCount < numPutsRequired) {
                errors.push(`You have not selected enough nations to underpreform.  Select exactly ${numPutsRequired} nations who you think will do worse than the listed value.`);
            }

            if(errors.length) {
                this[SUBMIT_ERRORS](errors);
            }

            else {
                this[SUBMIT_PICKS]();
            }
        }
    }
};
</script>
<style lang="sass" scoped>
.submission-form {
    max-width : 30em;
    width : calc(100% - 4em);
    float : right;
    margin : 2em;
}
</style>
