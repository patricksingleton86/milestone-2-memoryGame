$(document).ready(function() {
    const tiles = document.querySelectorAll(".tile");
    
    //  Shuffle tiles
    (function shuffle() {
        tiles.forEach(tile => {
            let randomize = Math.floor(Math.random()* 12);
            tile.style.order = randomize;
        })
    })();
    
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
    let flips = [];

    function flipTile(){
        if(flipLock) return;
        if(this === tile1) return;
        

        $(this).addClass("flip");
            flips.push(this);
            console.log(flips)
            if(flips === 1){
                startTimer();
            console.log(flips)
        }
            
        if(!isFlipped) {
            // first click
            isFlipped = true;
            tile1 = this;
            //  second click
        } else {
            isFlipped = false;
            tile2 = this;

            checkMatch();
        }
    }

    function checkMatch() {
        if(tile1.dataset.name === tile2.dataset.name) {
            disable();
        } else {
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
            reset();
            }, 1000);
    }

    function reset() {
        isFlipped = false;
        flipLock = false;
        tile1 = null;
        tile2 = null;
    }

    // Timer
    var i = 1;
    // $("#startButton").click(function (e) {
    function startTimer() {
        setInterval(function () {
            // if(flips == 1){
            $("#timer").html(i);
            i++;
        }, 1000);
    };
    
    tiles.forEach(tile => tile.addEventListener("click", flipTile));
})





// function flipTile(){
//         $(this).addClass("flip");
//             // flipped.push(this);
            
//         if(!isFlipped) {
//             // first click
//             isFlipped = true;
//             tile1 = this;
//             //  second click
//         } else {
//             isFlipped = false;
//             tile2 = this;

//             checkMatch();
//         }
//         }
//     function checkMatch() {
//         if(tile1.dataset.name === tile2.dataset.name) {
//             disable();
//         } else {
//             unflip();
//         }
//     }
//     function disable() {
//         tile1.removeEventListener("click", flipTile);
//         tile1.removeEventListener("click", flipTile);
//         } 
//     function unflip() {
//         setTimeout(function() {
//             $(tile1).removeClass("flip");
//             $(tile2).removeClass("flip");
//             }, 1000);
//     }

    
//     tiles.forEach(tile => tile.addEventListener("click", flipTile));
// })

// function checkMatch() {
//         let match = tile1.dataset.name === tile2.dataset.name;

//         match ? disable() : unflip();
//     }
