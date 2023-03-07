
//detecting button press/basically if click is detected by mouse
var numberOfDrumButtons=document.querySelectorAll(".img").length;
var sound=new Audio(); 

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".img")[i].addEventListener("click",function(){
        
       
        var buttonInnerHTML = this.classList[1];
        makeSound(buttonInnerHTML);
        
    });
}

// document.getElementById("pause").addEventListner("click",function(){
//     stopAudio();
// });

//Detecting Keyboard press/ basically if keyborad is used to give instruction to drum kit..eg key 'w'
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    // stopAudioButton(event.code);
    
});

function makeSound(key){
   
    switch (key) {
        
        case "a":
                   
            sound =new Audio('sounds/shinchan.mp3'); 
            sound.play();
        break;

        case "b":   
            sound=new Audio('sounds/doremon.mp3');
            sound.play();   
        break;

        case "c":
            sound=new Audio('sounds/kitretsu.mp3');
            sound.play();
        break;

        case "d":
            sound=new Audio('sounds/perman.mp3');
            sound.play();
        break;

        case "e":
            sound=new Audio('sounds/pokemon.mp3');
            sound.play();
        break;

        case "f":
            sound=new Audio('sounds/ben.mp3');
            sound.play();
        break;

        case "g":
            sound=new Audio('sounds/jerry.mp4');
            sound.play();
        break;

        case "h":
            sound=new Audio('sounds/dragon.mp3');
            sound.play();
        break;

        case "i":
            sound=new Audio('sounds/shaun.mp3');
            sound.play();
        break;

        case "j":
            sound=new Audio('sounds/krishna.mp3');
            sound.play();
        break;

        case "k":
            sound=new Audio('sounds/nikki.mp3');
            sound.play();
        break;

        case "l":
            sound=new Audio('sounds/noddy.mp3');
            sound.play();
        break;

        case "m":
            sound=new Audio('sounds/ninja.mp3');
            sound.play();
        break;

        case "n":
            sound=new Audio('sounds/ferb.mp3');
            sound.play();
        break;

        case "o":
            sound=new Audio('sounds/tmkoc.mp3');
            sound.play();
        break;

    default: console.log(key)
        
}

}

function buttonAnimation(currentKey){
   var activeButton=document.querySelector("."+currentKey);//button that will change its style
   activeButton.classList.add("pressed");

   setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function stopAudio(event) {
   
        sound.pause();
        sound.currentTime = 0;
    }

// function stopAudioButton(evt){
//     // var stopButton=document.querySelector(".esc");
//     if(evt =="q"){
//         alert("working");
//     }}
    




