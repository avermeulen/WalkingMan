// const image = document.querySelector("#image");


const canvas = document.getElementById("image");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "man_walking.png"

console.log(img);

let index = 0;
let action = 0;

let frameCounter = 0;
let staggerRate = 17;


function animate() {
    if (frameCounter % staggerRate == 0) {

        if (index >= 5) {
            index = 0;
        }

        ctx.drawImage(document.querySelector('.man'), 136 * index, 136*action, 136, 136,  0, 0, 136, 136);
        index++;

    }



    requestAnimationFrame(animate);
    frameCounter++;
}

animate();


const direction = document.querySelector('.direction')

function navigateMan() {

    // console.log('key pressed!' + window.event.keyCode);
    
    const {keyCode} = window.event;
    console.log(keyCode);

    if ([37,65].includes(keyCode)) {
        // left
        action = 1
    } else if ([39,68].includes(keyCode)) {
        // right
        action = 2
    } 
    else if ([40,83].includes(keyCode)) {
        // 
        action = 0
    }
    else if ([38, 87].includes(keyCode)) {
        // 
        action = 3
    }
    else if (keyCode == 72) {
        document.querySelector('.sprite').classList.toggle('hidden');
    }
    else if (keyCode == 187) {
        if (staggerRate > 1) {
            staggerRate--;
        }
    }
    else if (keyCode == 189) {
        if (staggerRate < 20) {
            staggerRate++;
        }
    }


    direction.innerText = staggerRate;

}   