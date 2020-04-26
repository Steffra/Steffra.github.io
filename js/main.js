$('.hovertext, .icon').hover(function () {
    myarray = ["one", "two", "three", "four", "five",]
    if (jQuery.inArray($(this).prop('id'), myarray) !== -1) {
        $(this).css("opacity", "0");
        $(this).next().css("opacity", "1")
    } else {
        $(this).css("opacity", "1");
        $(this).prev().css("opacity", "0")
    }
});
$('.hovertext, .icon').mouseout(function () {
    myarray = ["one", "two", "three", "four", "five",]
    if (jQuery.inArray($(this).prop('id'), myarray) !== -1) {
        $(this).css("opacity", "1");
        $(this).next().css("opacity", "0");
    } else {
        $(this).css("opacity", "0");
        $(this).prev().css("opacity", "1");
    }
});
$('.flat-button').hover(function () {
    if (!$(this).children().hasClass('noColorChangeOnhover')) {
        $(this).children().css("color", "#222");
    }
});
$('.flat-button').mouseleave(function () {
    $(this).children().css("color", "#08fdd8");
    $(this).children('h2').css("color", "#8d8d8d");
});
$('.flat-button span').hover(function () {
    if (!$(this).hasClass('noColorChangeOnhover')) {
        $(this).css("color", "#222");

    }
});

if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js");
}

var canvas = document.getElementById('myCanvas');
if (canvas) {
    canvas.height = canvas.width;
}

$(function(){
    $( "body" ).on( "swipeleft", swipeleftHandler );

    function swipeleftHandler( event ){
    window.location.href = "index.php";
    }
});
