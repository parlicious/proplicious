<template>
    <div class="submit-form">
        <div class="input-wrapper">
            <input 
                v-model="email"
                type="email" 
                placeholder="Email"
                @keyup.enter="submitAttempt"
            >
            <input 
                v-model="password"
                type="password" 
                placeholder="Password"
                minlength="8"
                @keyup.enter="submitAttempt"
            >
        </div>
        <button
            class="submit-btn"
            @click="submitAttempt"
        >
            Submit
        </button>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { SET_EMAIL, SET_PASSWORD } from '../store/mutationTypes';
import { SUBMIT_ERRORS, SUBMIT_PICKS } from '../store/actionTypes';
import { numCallsRequired, numPutsRequired } from '../data/settings';
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default {
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
        invalid() {
            return this.callCount !== 3 || this.putCount !== 3;
        }
    },
    methods : {
        ...mapMutations([
            SET_EMAIL,
            SET_PASSWORD,
            SUBMIT_ERRORS
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
@import '../variables.scss';
.submit-form {
    display : inline-block;
    float : right;

    .input-wrapper {
        display : inline-block;
        padding : .5em 0 0 0;
        input {
            display : block;
            font-size : 110%;
        }
    }
    .submit-btn {
        font-size : 110%;
        border-radius : .4em;
        background : $accent;
        color : white;
        vertical-align : top;
        padding : .6em;
        border: none;
        cursor:pointer;
        margin : 1em 1em;
        &[disabled] {
            background: $accent-desat;
            cursor: auto;
        }
    }
}
@media(max-width:$break) {
    .submit-form {
        position : fixed;
        left : 0;
        bottom : 0;
        background: $bg;
        width : 100%;
        float : unset;
        z-index : 5;
        padding : 1%;
        font-size : 90%;
        .input-wrapper {
            width : 63%;
            input {
                width : 100%;
            }
        }
        .submit-btn {
            margin-left : 3%;
            margin-right : 1%;
            width : 25%
        }
    }
}
</style>
