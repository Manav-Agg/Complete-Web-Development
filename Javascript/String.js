// var name = "Manav";
// name.slice(0, 1); //0 is included but 1 is excluded

var tweet = prompt("Compose your tweet: ")
alert("You have written " + tweet.length + " characters. You have " + (140 - tweet.length) + " characters remaining.");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);

alert(prompt("Compose your tweet: ").slice(0, 140));

var name = prompt("What is your name");
var lowerName = name.toLowerCase();
var firstChar = lowerName.slice(0, 1);
var upperCaseFirstCase = firstChar.toUpperCase();
var restOfName = lowerName.slice(1, lowerName.length);
var capitalisedName = upperCaseFirstCase + restOfName;
alert("Hello, " + capitalisedName);