document.addEventListener('DOMContentLoaded', function () {

    function initiate() {
        document.querySelector(".pbody").innerHTML = `<h3>Instructions:</h3>
    <ol>
        <li>Check the Hit count and hit the bubble with that number</li>
        <li>As you hit the bubble with the correct number, your score will increase!</li>
        <li>You get a total of 60 seconds to play and score</li>
        <li>Click on the start button to play!</li>
    </ol>
    <button class="button">Let's Start</button>`

    let button = document.querySelector(".button");
    if (button) {
        button.addEventListener("click", start);
    }
    }

    

    initiate();

    function start() {
        let score = 0;
        let hit;
        let body = document.querySelector(".pbody");

        
        updateHit();
        makeBubbles();
        runTimer();

        function makeBubbles() {
            
            let clutter = "";
            let numberOfBubbles;

            if (window.innerWidth >= 600) {
                numberOfBubbles = 177;
            } else {
                body.style.display = "grid";
                body.style.gridTemplateColumns  = "repeat(6, 1fr)";
                body.style.gap= "10px"; /* Adjust the gap as needed */
                numberOfBubbles = 60;
            }
            for (let i = 1; i <= numberOfBubbles; i++) {
                clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
            }
            body.innerHTML = clutter;
        }

        function updateHit() {
            hit = Math.floor(Math.random() * 10);
            document.querySelector(".hit").textContent = hit;
        }

        function runTimer() {
            let time = 60;
            let timeInt = setInterval(function () {
                if (time > 0) {
                    time--;
                    document.querySelector(".timer").innerHTML = time;
                } else {
                    clearInterval(timeInt);
                    document.querySelector(".pbody").innerHTML = `<h1>Game Over! </h1> <br> <h1>Your Final Score : ${score}</h1>`
                    body.style.display = "flex";
                }
            }, 1000);
        }

        function incScore() {
            score += 10;
            document.querySelector(".scoreVal").innerHTML = score;
        }

        document.querySelector(".pbody").addEventListener("click", function (dets) {
            if (hit == Number(dets.target.textContent)) {
                incScore();
                updateHit();
                makeBubbles();
            }
        })
    }

});

