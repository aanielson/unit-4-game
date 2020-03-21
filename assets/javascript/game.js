//create random variables
    //goal is between 19-120
var goalNumber = Math.floor((Math.random() * 101) + 19);

//assign each crystal a random number between 1-12
    //ruby
    //diamond
    //opal
    //emerald
var ruby = Math.floor(Math.random() * 13);
var diamond = Math.floor(Math.random() * 13);
var opal = Math.floor(Math.random() * 13);
var emerald = Math.floor(Math.random() * 13);

console.log(goalNumber);
console.log(ruby);
console.log(diamond);
console.log(opal);
console.log(emerald);

//create wins, losses, and score variables and set to 0
var wins = 0;
var losses = 0;
var score = 0;
//display goal var inside of the id goal
document.getElementById("goal").innerHTML = goalNumber;

//when one crystal is clicked, add that assigned amount to the id/variable score
$("#ruby").click( function() {
    score = score+ruby;
    document.getElementById("score").innerHTML = score;
    console.log(score);
});
$("#diamond").click( function() {
    score = score+diamond;
    document.getElementById("score").innerHTML = score;
    console.log(score);
});
$("#opal").click( function() {
    score = score+opal;
    document.getElementById("score").innerHTML = score;
    console.log(score);
});
$("#emerald").click( function() {
    score = score+emerald;
    document.getElementById("score").innerHTML = score;
    console.log(score);
});
//if the score matches the beginning random number, increase wins id/var
    //reset and randomize goal & crystal numbers
if (score === goalNumber) {
    reset();
    wins++;
    document.getElementById("wins").innerHTML = wins;
}
//if the score goes over the beginning random number, increase losses id/var
    //reset and randomize goal & crystal numbers
if (score >= goalNumber) {
    reset();
    losses++;
    document.getElementById("losses").innerHTML = losses;
}
//reset function
function reset() {
    goalNumber = Math.floor((Math.random() * 101) + 19);
    document.getElementById("goal").innerHTML = goalNumber;
    ruby = Math.floor(Math.random() * 13);
    diamond = Math.floor(Math.random() * 13);
    opal = Math.floor(Math.random() * 13);
    emerald = Math.floor(Math.random() * 13);
}


