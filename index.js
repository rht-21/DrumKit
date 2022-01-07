var NumberofDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<NumberofDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", Response);
}

function Response() {
  var buttonpress = this.innerHTML;
  makeSound(buttonpress);
  getAnimation(buttonpress);
}

document.addEventListener("keypress", function (event){
  makeSound(event.key);
  getAnimation(event.key);
});

function makeSound(key) {
  switch(key)
  {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    case "j":
      var sound = new Audio("sounds/snare.wav");
      sound.play();
      break;

    case "k":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "l":
      var sound = new Audio("sounds/kick.wav");
      sound.play();
      break;

    default:
      break;
  }
}

function getAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
