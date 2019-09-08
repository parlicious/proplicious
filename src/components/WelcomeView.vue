<template>
    <div>
        <v-card
            v-for="(card) in cards"
            :key="card.id"
            class="ma-3"
        >
            <v-card-title primary-title>
                <div 
                    :id="card.id"
                    class="headline"
                >
                    {{ card.header }}
                </div>
            </v-card-title>
            <v-card-text 
                v-for="(text, textIndex) in card.text"
                :key="textIndex"
            >
                {{ text }}
            </v-card-text>
        </v-card>
        <div class="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/amb169-oKuM"
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
        </div>
    </div>
</template>
<script>
import { VCard, VCardTitle, VCardText } from 'vuetify/lib';
export default {
    components : {
        VCard,
        VCardTitle,
        VCardText
    },
    data : () => ({
        cards: [
            {
                header: 'Welcome',
                id: 'welcome',
                text: [
                    "Hey! I'm really excited about you showing interest in The Rugby World Cup 2019. " +
                    "I've structured this game so that prior knowledge of the sport or teams involved " +
                    "is not required to be successful. I hope you have a great time following the Rugby World Cup.",
                    "-Chad"
                ]
            },
            {
                header: 'Game Rules',
                id: 'game-rules',
                text : [
                    "In order to make the game fun for people who don't know much (or anything) about rugby, " +
                    "we will be using a modified over/under system. I have determined an expected number of wins " +
                    "for each team in the tournament. You'll see that number next to each team in the picks page. " +
                    "You need to pick four teams that you believe will do better than my projection AND four " +
                    "teams that you believe will do worse than my projection.",
                    "For teams that you pick to overachieve, you will receive (actualWins - expectedWins) points. " +
                    "For the teams you pick to underacheive, you will receive (expectedWins - actualWins) points.",
                    "Draws are not very common in rugby, however they can happen in the pool stage.  In the event " +
                    "of a draw, both teams will be credited with half of a win."
                ]
            },
            {
                header: 'Tournament Info',
                id: 'tournament-info',
                text: [
                    "The Rugby World Cup takes place in Japan. The first match will take place on Friday the 20th of " +
                    "September at 6:45am Atlanta time.  If you're playing you need to have made your selections by then.",
                    "The tournament has a pool stage and a knockout stage.  There are four pools, each with " +
                    "five teams.  That means that each team will have four matches during the pool stage. " +
                    "At the end of the pool stage, the top two teams from each pool will move onto the knockout stage, " +
                    "an eight team, three round tournament to decide the champion. The knockout stage seeding is already decided. " +
                    "Pool A plays against Pool B and Pool C plays against Pool D. There is also a third place game " +
                    "played by the two teams who lost in the semi finals.",
                    "This means there will be a total of 48 matches during the tournament, 40 pool matches, " +
                    "four quarter-finals, two semi-finals, the thrid place match, and the final. " +
                    "The maximum number of games a team can win is seven."
                ]
            }
        ]
    })
};
</script>
<style lang="sass" scoped>
.video-wrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
    margin: 20px;
	height: 0;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>

