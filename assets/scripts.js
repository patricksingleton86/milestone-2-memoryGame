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
    let tile1, tile2;

    function flipTile(){
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

        if(tile1.dataset.name === tile2.dataset.name) {
            tile1.removeEventListener("click", flipTile);
            tile1.removeEventListener("click", flipTile);
        } else {
            setTimeout(function() {
            $(tile1).removeClass("flip");
            $(tile2).removeClass("flip");
            }, 1000);
        }
            
        }
    }
    
    tiles.forEach(tile => tile.addEventListener("click", flipTile));
})






    // let flipped = [];
    // let match = [];
// if (flipped.length === 2) {
        //     if(flipped[0].name === flipped[1].name) {
        //         flipped[0].toarray(match);
        //         flipped[1].toarray(match);
        //         if(match.length === 12){
        //             return "Congratulations";
        //         }

        //     } if(flipped[0].name != flipped[1].name)  {

    
    
    
    // // match
    // function flipped() {       
    //     if(flippedTile.length === 2) {
    //         if(flippedTile[0].name === flippedTile[1].name) {
    //             match();
    //         } else {
    //             noMatch();
    //         }
    //         }
    //     }
    // function match() {

    // }
    // function noMatch() {
    //     $(flippedTile[0]).removeClass("flip");
    //     $(flippedTile[1]).removeClass("flip");