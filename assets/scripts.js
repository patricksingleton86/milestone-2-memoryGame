$(document).ready(function() {
    let tiles = document.querySelectorAll(".tile");
    // hover
    $(".tile").hover(function() {
        $( this ).addClass("hover");
    }, function() {
        $( this ).removeClass("hover");
    });
    // flip
    let flipped = [];
    $(".tile").click(function() {
        $( this ).click("flip");
        flipped.push(this);
        if (flipped.length === 2) {
            if(flipped[0].name === flipped[1].name) {
                match();
            } if(flipped[0].name != flipped[1].name)  {
                noMatch();

            }
        }


    })
    

    
    
    
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
    tiles.forEach(tile => tile.addEventListener("click"))
});