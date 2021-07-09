var nodrumbtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < nodrumbtn; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var drumInnerHTML = this.innerHTML;
    func(drumInnerHTML);
    btnAnimation(drumInnerHTML);
  }) ;

}

document.addEventListener("keydown", function(){
  func(event.key);
  btnAnimation(event.key);
});
function func(key){

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(drumInnerHTML);
  }
}
function btnAnimation(curbtn){
  var activeBtn = document.querySelector("."+ curbtn );
  activeBtn.classList.add("pressed");

  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },.100);
}
