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

Contestant.prototype.setScore = function(score) {
    this.score = score;
};