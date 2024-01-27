// document.querySelectorAll("button").addEventListener("click",handleClick);

// alert("JavaScript working");

//instead of sendig a function with paranthesis we pass it to make sure it doesn't get called instantly but whwn the clcik happens


// FOR THE BUTTON FROM THE SCREEN


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      
        var content=this.innerHTML;
        makeSound(content);
        buttonAnimation(content);
        }


    );
}

// FOR THE KEY PRESS FROM THE KEYBOARD

document.addEventListener("keydown",function(evemt){
    makeSound(evemt.key);
    buttonAnimation(evemt.key);
}
);

function makeSound(key)
{
    switch(key){
        case 'w':
            audio= new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case 'a':
            audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case 's':
            audio= new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case 'd':
            audio= new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case 'j':
            audio= new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case 'k':
            audio= new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case 'l':
            audio= new Audio('sounds/tom-4.mp3');
            audio.play();
        default:
            console.log("wrong choice!");
    }
};
 

function buttonAnimation(evemt)
{
        var activeButton=document.querySelector("."+evemt);
        activeButton.classList.add("pressed");
        setTimeout(function(){
             activeButton.classList.remove("pressed");
        }, 300); 
        
        
}
       
