// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);    
    });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");  //What to do when click detected.
            tom1.play();
        break;
            
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");  //What to do when click detected.
            tom2.play();
        break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");  //What to do when click detected.
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");  //What to do when click detected.
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");  //What to do when click detected.
            snare.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");  //What to do when click detected.
            crash.play();
        break;
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");  //What to do when click detected.
            kick.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activEButton = document.querySelector("." + currentKey);
    activEButton.classList.add("pressed");
    setTimeout(function(){
        activEButton.classList.remove("pressed");
    }, 100);
}