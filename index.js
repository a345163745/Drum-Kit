const buttonLength = document.querySelectorAll("button").length
for(let i=0;i<buttonLength;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    makeSound(this.innerText);
    buttonAnimation(this.innerText);
    
})
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            let snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            let crash = new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            let kickBass = new Audio("./sounds/kick-bass.mp3")
            kickBass.play();
            break;
        default:
            console.log("no such key")
            break;
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector(`.${currentKey}`)
    activeButton.classList.toggle("pressed")
    setTimeout(()=>{
        activeButton.classList.toggle("pressed")
    },500)
}