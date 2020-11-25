
var drumLength=document.querySelectorAll(".drum").length;
for(var i=0;i<drumLength;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',cliked);
}
function cliked(){
    var buttonClicked=this.innerHTML;
    makeSound(buttonClicked);
    animation(buttonClicked);
}

function makeSound(key){
    switch (key) {
        case 'w':
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;   
        case 'd':
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;   
        case 'j':
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;   
        case 'k':
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;   
        case 'l':
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;    
    
        default:
            break;
    }
}


document.addEventListener("keyup",function(event){
    if (event.getModifierState("CapsLock")) {
        alert("Caps is on Please turn of to play the music!");
      } else {
        makeSound(event.key);
        animation(event.key);
      }
});

function animation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);

}
