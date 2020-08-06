

var list= document.querySelectorAll(".drum");

for (var i=0; i<list.length; i++){

 list[i].addEventListener("click", function(){
  var buttonInerHTML = this.innerHTML;

makeSound(buttonInerHTML);

bottonAnimation(buttonInerHTML);

});
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
});

function makeSound(key){

switch (key) {

  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

          case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k":
              var kickBass = new Audio("sounds/kick-bass.mp3");
              kickBass.play();
              break;

              case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

  default: alert(this.innerHTML);

}
bottonAnimation(key);
}

function bottonAnimation(currentKey){
  var currentBotton = document.querySelector("."+currentKey);

  currentBotton.classList.add("pressed");

  setTimeout(function(){
    currentBotton.classList.remove("pressed");
  }, 50);
}
