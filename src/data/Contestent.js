export default function Contestant() {
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
    return this.calls;
};

Contestant.prototype.setCalls = function(calls) {
    this.calls = calls;
};

Contestant.prototype.getPuts = function() {
    return this.puts;
};

Contestant.prototype.setPuts = function(puts) {
    this.puts = puts;
};

Contestant.prototype.getScore = function() {
    return this.score;
};

Contestant.prototype.setScore = function(score) {
    this.score = score;
};