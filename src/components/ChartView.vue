<template>
    <standings-chart 
        v-if="chartData"
        :chart-data="chartData"
    />
</template>

<script>
import colors from 'vuetify/lib/util/colors';
import StandingsChart from './StandingsChart';
import {mapGetters, mapActions} from 'vuex';
import { FETCH_STANDINGS } from '../store/actionTypes';
import { filter } from 'lodash';

const colorWheel = [
    colors.red.base,
    colors.purple.base,
    colors.indigo.base,
    colors.lightBlue.base,
    colors.teal.base,
    colors.lightGreen.base,
    colors.yellow.base,
    colors.orange.base,
    colors.brown.base,
    colors.grey.base,
    colors.pink.base,
    colors.deepPurple.base,
    colors.blue.base,
    colors.cyan.base,
    colors.green.base,
    colors.lime.base,
    colors.amber.base,
    colors.deepOrange.base,
    colors.blueGrey.base,
    colors.red.accent1,
    colors.purple.accent1,
    colors.indigo.accent1,
    colors.lightBlue.accent1,
    colors.teal.accent1,
    colors.lightGreen.accent1,
    colors.yellow.accent1,
    colors.orange.accent1,
    colors.brown.lighten3,
    colors.grey.lighten3,
    colors.pink.accent1,
    colors.deepPurple.accent1,
    colors.blue.accent1,
    colors.cyan.accent1,
    colors.green.accent1,
    colors.lime.accent1,
    colors.amber.accent1,
    colors.deepOrange.accent1,
    colors.blueGrey.lighten3,
    colors.red.accent3,
    colors.purple.accent3,
    colors.indigo.accent3,
    colors.lightBlue.accent3,
    colors.teal.accent3,
    colors.lightGreen.accent3,
    colors.yellow.accent3,
    colors.orange.accent3,
    colors.brown.darken3,
    colors.grey.darken3,
    colors.pink.accent3,
    colors.deepPurple.accent3,
    colors.blue.accent3,
    colors.cyan.accent3,
    colors.green.accent3,
    colors.lime.accent3,
    colors.amber.accent3,
    colors.deepOrange.accent3,
    colors.blueGrey.darken3
];

let colorIndex = 0;

function nextColor() {
    const color = colorWheel[colorIndex];
    colorIndex++;
    colorIndex = colorIndex % colorWheel.length;
    return color;
}

function handleDraw(contestant, dataset, team1, team2) {

    let val = dataset.data[dataset.data.length - 1];
    if(contestant.hasCallOn(team1)) {
        val += .5;
    }
    else if(contestant.hasPutOn(team1)) {
        val -= .5;
    }
    if(contestant.hasCallOn(team2)) {
        val += .5;
    }
    else if(contestant.hasPutOn(team2)) {
        val -= .5;
    }
    dataset.data.push(val);
}

function handleVictory(contestant, dataset, winner) {

    let val = dataset.data[dataset.data.length - 1];
    if(contestant.hasCallOn(winner)) {
        val++;
    }
    else if(contestant.hasPutOn(winner)) {
        val--;
    }
    dataset.data.push(Number(val.toFixed(2)));
}

function buildChartData(standings, matches) {
    if(!standings) {
        return null;
    }
    const completedMatches = filter(matches, match => match.status === 'C');
    const labels = ['Start'];
    completedMatches.forEach(({teams}) => {
        labels.push(`${teams[0].name} v ${teams[1].name}`);
    });
    const datasets = standings.map((c, i) => {
        const color = nextColor();
        return {
            label : c.getName(),
            data  : [Number(c.getPrettyOriginalScore())],
            backgroundColor : color,
            borderColor : color,
            fill: false,
            hidden : i > 4
        };
    });
    completedMatches.forEach(match => {
        if(match.outcome === 'D') {
            const team1 = match.teams[0].name;
            const team2 = match.teams[1].name;
            standings.forEach((contestant, index) => {
                const dataset = datasets[index];
                handleDraw(contestant, dataset, team1, team2);
            });
        }
        else if(match.outcome === 'A') {
            const winner = match.teams[0].name;
            standings.forEach((contestant, index) => {
                const dataset = datasets[index];
                handleVictory(contestant, dataset, winner);
            });
        }
        else if(match.outcome === 'B') {
            const winner = match.teams[1].name;
            standings.forEach((contestant, index) => {
                const dataset = datasets[index];
                handleVictory(contestant, dataset, winner);
            });
        }
    });

    return {
        datasets,
        labels
    };
}

export default {
    components : {
        StandingsChart
    },
    computed : {
        ...mapGetters([
            'standings',
            'matches'
        ]),
        chartData() {
            return buildChartData(this.standings, this.matches);
        }
    },
    created() {
        if(!this.standings) {
            this[FETCH_STANDINGS]();
        }
    },
    methods : {
        ...mapActions([FETCH_STANDINGS])
    }
};
</script>
