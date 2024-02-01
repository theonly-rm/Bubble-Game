let score = 0;
let hit;

function makeBubbles(){
    let clutter = "";

    for(i=1;i<177;i++) {
            clutter += `<div class="bubble">
            ${Math.floor(Math.random()*10)}
        </div>`
    }
    
    let body = document.querySelector(".pbody");
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