const dinosaur = document.getElementById("dino");

function jump(){
    dinosaur.style.top ="50px";
    setTimeout(function(){
        dinosaur.style.top = "150px";
    }, 275);
}

document.addEventListener("keydown", jump);