// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}