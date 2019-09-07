<template>
    <li>
        <a 
            :href="country.intro"
            class="flag"
            target="_blank"
        >{{ country.flag }}</a>
        <span class="name">{{ country.name }}</span>
        <span
            class="ew"
            :style="{background : color.lighten3 }"
            :class="extraClass"
        >{{ country.ew }}
            <country-selector 
                :country="country"
                :has-call="hasCall"
                :has-put="hasPut"
            />
        </span>
    </li>
</template>

<script>
import CountrySelector from './CountrySelector.vue';
import { mapGetters } from 'vuex';
export default {
    components : {
        CountrySelector
    },
    props : {
        country : {
            type : Object,
            default : () => {}
        },
        pool : {
            type : String,
            default : 'A'
        },
        color : {
            type : Object,
            required : true
        }
    },
    computed : {
        ...mapGetters([
            'hasCallOnCountry',
            'hasPutOnCountry'
        ]),
        hasCall() { 
            return this.hasCallOnCountry(this.country);
        },
        hasPut() { return this.hasPutOnCountry(this.country);},
        extraClass() {
            const classNames = [this.pool];
            if(this.hasCall) {
                classNames.push('call');
            }
            if(this.hasPut) {
                classNames.push('put');
            }

            return classNames;
        }
    }
};
</script>
<style lang="sass" scoped>
@import '../variables.scss';
li {
    line-height : 1.3em;
    padding : .2em 0;
    position: relative;

}

.ew {
    font-weight: bold;
    color : white;
    border-radius : .5em;
    padding : 0 .3em;
    float : right;
    min-width : 3.5em;
    text-align : right;
}

.call {
    color: $positive;
    transition: color .3s;
}

.put {
    color : $negative;
    transition: color .3s;
}
.name {
    margin-left: 1.5em;
}

.flag {
    text-decoration:none;
    position: absolute;
    font-size: 115%;
    transition: font-size .1s;
    &:hover{
        font-size: 140%;
    }
    &:active {
        font-size: 115%;
    }
}

</style>

