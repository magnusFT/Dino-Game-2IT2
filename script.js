const dinosaur = document.getElementById("dino");
const kaktus = document.getElementById("kaktus");

function jump(){
    dinosaur.style.top = "50px";

                                              
    setTimeout(function(){
        dinosaur.style.top = "150px";
    }, 275);
}

let isAlive = setInterval(function(){ 
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));   

if(kaktusLeft < 50 && kaktusLeft > 0 && dinoTop > 140){
    alert("Game Over!");
}
}, 10);
document.addEventListener("keydown", jump);             