<template>
    <div 
        class="results-for-country"
        :style="wrapperStyle"
    >
        <div
            :style="toolbarStyle"
            class="country-toolbar"
        >
            <h3 class="country-name">
                {{ matchInfo.name }}
            </h3>
            <button
                :style="styleFor('summary')"
                @click="body = 'summary'"
            >
                Summary
            </button>
            <button
                :style="styleFor('fixtures')"
                @click="body = 'fixtures'"
            >
                Fixtures
            </button>
        </div>
        <div class="content">
            <transition 
                name="fade"
                mode="out-in"
            >
                <country-summary
                    v-if="body === 'summary'"
                    :info="matchInfo"
                />
                <fixtures-container
                    v-if="body === 'fixtures'"
                    :matches="matchInfo.matches"
                />
            </transition>
        </div>
    </div>
</template>

<script>
import FixturesContainer from './FixturesContainer.vue';
import CountrySummary from './CountrySummary.vue';
import countries from '../data/countries';
export default {
    components : {
        FixturesContainer,
        CountrySummary
    },
    props : {
        matchInfo : {
            type : Object,
            required : true
        }
    },
    data : () => ({body : 'summary'}),
    computed : {
        country() { return countries[this.matchInfo.name];},
        toolbarStyle() {
            return {
                background : this.country.primary,
                color : this.country.complement
            };
        },
        wrapperStyle() {
            return { "border-color": this.country.primary };
        }
    },
    methods : {
        styleFor(body) {
            if(this.body === body) {
                return {
                    background : this.country.accent
                };
            }
        }
    }
};
</script>
<style lang="sass" scoped>
.results-for-country {
    width : 22em;
    margin : .5em;
    border-radius: .5em;
    border : 1px solid black;
    display : inline-block;
    overflow : hidden;
    .country-toolbar {
        padding : .5em;
        .country-name {
            margin: 0 0 .3em 0;
            font-size: 140%;

        }
        button{
            font-size : 1em;
            background : none;
            color : inherit;
            margin : 0;
        }
    }
    .content {
        margin : .5em;
    }
}
</style>
