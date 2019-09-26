import {find} from 'lodash';
export default function Contestant() {
    this.picks = {};
}

Contestant.prototype.getName = function() {
    return this.name;
};

Contestant.prototype.setName = function(name) {
    this.name = name;
};

Contestant.prototype.getEmail = function() {
    return this.email;
};

Contestant.prototype.setEmail = function(email) {
    this.email = email;
};

Contestant.prototype.getCalls = function() {
    return this.picks.calls;
};

Contestant.prototype.setCalls = function(calls) {
    this.picks.calls = calls;
};

Contestant.prototype.getPuts = function() {
    return this.picks.puts;
};

Contestant.prototype.setPuts = function(puts) {
    this.picks.puts = puts;
};

Contestant.prototype.getScore = function() {
    return this.score;
};

Contestant.prototype.getPrettyScore = function() {
    return this.score.toFixed(2);
};

Contestant.prototype.setScore = function(score) {
    this.score = score;
};

Contestant.prototype.getOriginalScore = function() {
    return this.originalScore;
};

Contestant.prototype.getPrettyOriginalScore = function() {
    return this.originalScore.toFixed(2);
};

Contestant.prototype.setOriginalScore = function(score) {
    this.originalScore = score;
};

Contestant.prototype.hasCallOn = function(country) {
    return find(this.getCalls(), {name:country});
};

Contestant.prototype.hasPutOn = function(country) {
    return find(this.getPuts(), {name:country});
};