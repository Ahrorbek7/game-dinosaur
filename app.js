const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if(dispatchEvent.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump")
        }, 500)
    }
}

let checkAlive = setInterval(function() {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    )

    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    )

    if(cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143){
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        alert("Ooops, you lost!")
        window.location.reload();
    }
}, 10)

document.addEventListener("keydown", function() {
    jump();
})