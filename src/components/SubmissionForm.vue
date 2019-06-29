<template>
    <div class="submit-form">
        <div class="input-wrapper">
            <input 
                v-model="email"
                type="email" 
                placeholder="Email"
            >
            <input 
                type="password" 
                placeholder="Password"
                minlength="8"
                :value="password"
            >
        </div>
        <button
            :disabled="invalid"
            class="submit-btn"
            @click="submitPicks"
        >
            Submit
        </button>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { SET_EMAIL, SET_PASSWORD } from '../store/mutationTypes';
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
            SET_PASSWORD
        ]),
        ...mapActions([
            'submitPicks'
        ])
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
