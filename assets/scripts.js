$(document).ready(function() {
    
    $(".tile").hover(function() {
        $( this ).addClass("hover");
    }, function() {
        $( this ).removeClass("hover");
    });
    $(".tile").click(function() {
        $( this ).addClass("flip")
    })


});