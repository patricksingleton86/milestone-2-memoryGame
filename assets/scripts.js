$(document).ready(function() {
    const tiles = document.querySelectorAll(".tile");
    // hover
    $(".tile").hover(function() {
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover");
    });
    // flip
    let isFlipped = false;
    let flipLock = false;
    let tile1, tile2;

    function flipTile(){
        if(flipLock) return;
        if (this === tile1) return;

        $(this).addClass("flip");
            // flipped.push(this);
            
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
        let match = tile1.dataset.name === tile2.dataset.name;

        match ? disable() : unflip();
    }

    function disable() {
        tile1.removeEventListener("click", flipTile);
        tile1.removeEventListener("click", flipTile);
    } 

    function unflip() {
        flipLock = true;
        setTimeout(function() {
            $(tile1).removeClass("flip");
            $(tile2).removeClass("flip");
            reset();
            }, 1000);
    }

    function reset() {
        [isFlipped, flipLock] = [false, false];
        [tile1, tile2] = [null, null];
    }

    (function shuffle() {
        tiles.forEach(tile => {
            let randomize = Math.floor(Math.random()* 12);
            tile.style.order = randomize;
        })
    })();
    
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
