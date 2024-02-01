let score = 0;
let hit;

document.querySelector(".pbody").addEventListener("click",function(dets){
    console.log(dets.view.innerHeight)
})

function makeBubbles(){
    let body = document.querySelector(".pbody");
    let clutter = "";
    let numberOfBubbles;

    if (window.innerWidth >= 600) {
        numberOfBubbles = 177; 
    } else {
        numberOfBubbles = 78; 
    }
    for(i=2;i<=numberOfBubbles;i++) {
            clutter += `<div class="bubble">
            ${Math.floor(Math.random()*10)}
        </div>`
    }
    body.innerHTML = clutter;
    
}

function updateHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hit;
    
}

function runTimer(){
    let time = 60;
        let timeInt = setInterval(function(){
            if(time>0){
                time--;
                document.querySelector(".timer").innerHTML = time;
            }
            else {
                clearInterval(timeInt);
                document.querySelector(".pbody").innerHTML = `<h1>Game Over! </h1> <br> <h1>Your Final Score : ${score}</h1>`
            }
        },1000);
}

function incScore(){
        score+=10;
        document.querySelector(".scoreVal").innerHTML = score;
}

document.querySelector(".pbody").addEventListener("click", function(dets){
        if(hit == Number(dets.target.textContent)) {
            incScore();
            updateHit();
            makeBubbles();
        }
})

updateHit();
runTimer();
makeBubbles();