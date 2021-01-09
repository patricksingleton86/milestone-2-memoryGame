$(document).ready(function() {
    const tiles = document.querySelectorAll(".tile");
    setTimeout(function() {
        startUp();
    }, 3000);
    // hover tile
    $(".tile").hover(function() {
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover");
    });
    // flip tile
    let isFlipped = false;
    let flipLock = false;
    let tile1, tile2;
    let flips = 0;
    let matched = 0;

    function flipTile(){
        if(flipLock) return;
        if(this === tile1) return;
        
        $(this).addClass("flip");
            flips++;
            console.log(flips)
            if(flips == 1){
                startTimer();
            console.log(flips)
        } 
        if(!isFlipped) {
            // first click
            isFlipped = true;
            tile1 = this;
            //  second click
        }else {
            isFlipped = false;
            tile2 = this;

            checkMatch();
        }
    }
    function checkMatch() {
        if(tile1.dataset.name === tile2.dataset.name) {
            matched++;
            if(matched === 6){
                stopTimer();
            }
            disable();            
        }else {
            unflip();
        }
    }
    // Disabe fliped tile
    function disable() {
        tile1.removeEventListener("click", flipTile);
        tile1.removeEventListener("click", flipTile);
    } 
    // Unflip tiles that don't match
    function unflip() {
        flipLock = true;
        setTimeout(function() {
            $(tile1).removeClass("flip");
            $(tile2).removeClass("flip");
            flipable();
            }, 1000);
    }
    function flipable() {
        isFlipped = false;
        flipLock = false;
        tile1 = null;
        tile2 = null;
    }
    // Timer
    let i = 1;
    let best = localStorage.getItem("best");
    // $("#winModal").modal({show: false})
    
    function bestTime() {
        $("#bestTime").html(best);
    };
    function startTimer() {
        i = 0;
        totalTime = setInterval(function () {
            $("#timer").html(i);
            i++;
        }, 1000);
    }
    function stopTimer(){
        clearInterval(totalTime);
        result = i;
        console.log(result)
        if(best !== null) {
            if(best > result) {
                localStorage.setItem("best", result);
            }
        }else {
            localStorage.setItem("best", result)
        }
        $("#winModal").modal("show");
        $("#highScore").html(best);
        $("#yourScore").html(result);
    }
        // Reset button
    $("#reset").click(function(){
        resetTimer();
        shuffle();
        flipReset();
        startUp();
    });
    $("#winReset").click(function(){
        resetTimer();
        shuffle();
        flipReset();
        startUp();
        $("#winModal").modal("hide");
    });
    function resetTimer() {     
        $("#timer").html(0);
        clearInterval(totalTime);
    } 
    function flipReset(){
        $(".tile").removeClass("flip");
        flips = 0;
        matched = 0;
        console.log(flips)
    }
    function shuffle() {
        tiles.forEach(tile => {
            let randomize = Math.floor(Math.random()* 12);
            tile.style.order = randomize;
        })
    }
    // Page load 
    function startUp() {
        tiles.forEach(tile => tile.addEventListener("click", flipTile));
        shuffle();
        bestTime();
    }
})