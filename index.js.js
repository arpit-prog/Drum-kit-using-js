// document.querySelector(".d").addEventListener("click",clickbutton);
var drumnum = document.querySelectorAll(".drum").length;
///this is the method for mouse even
for (var i = 0; i < drumnum; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // setTimeout(function(){this.style.color = "yellow";},100);
    this.style.color = "yellow";
    var btn = this.innerHTML;
    setTimeout(function(){this.style.color = "white";},100);
    musickeys(btn);
    addanimation(btn);

  });
}

// document.querySelectorAll(".drum")[i].addEventListener("click",function (){########### this method use to any even which is delivered to target click is trigger,fxn is
// process when first argument access then second will happen
//   alert("i got clicked")
document.addEventListener("keypress", function(event) {
  var btn = event.key;
  musickeys(btn);
  addanimation(btn);
});


function musickeys(btn){
  switch(btn){
    case "w":
      var dr=new Audio("sounds/tom5.mp3");
      dr.play();
      break;

    case "a":
      var dr=new Audio("sounds/snare.mp3");
      dr.play();
      break;

    case "s":
      var dr=new Audio("sounds/tom-1.mp3");
      dr.play();
      break;

    case "d":
      var dr=new Audio("sounds/tom-2.mp3");
      dr.play();
      break;

    case "j":
      var dr=new Audio("sounds/tom-3.mp3");
      dr.play();
      break;

    case "k":
      var dr=new Audio("sounds/tom-4.mp3");
      dr.play();
      break;
    case "l":
      var dr=new Audio("sounds/kick-bass.mp3");
      dr.play();
      break;

    default:console.log(bottominnerHTML);
  }

}

// ###################  some animation use in keys ###############
function addanimation(key){
  var btn= document.querySelector("."+key);
  // ########3pressed is css class to implement some effect which we add in btn to show effect
  btn.classList.add("pressed");
// ########## setTimeout is inbuitl fxn which takes two parameter first fxn and second time in milisec fxn will execute
// in given time
  setTimeout(function(){btn.classList.remove("pressed");},100
);

}
