$('.hovertext, .icon').hover(function () {
    myarray = ["index", "skills", "about", "portfolio", "contact",]
    if (jQuery.inArray($(this).prop('id'), myarray) !== -1) {
        $(this).css("opacity", "0");
        $(this).next().css("opacity", "1")
    } else {
        $(this).css("opacity", "1");
        $(this).prev().css("opacity", "0")
    }
});
$('.hovertext, .icon').mouseout(function () {
    myarray = ["index", "skills", "about", "portfolio", "contact",]
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

var current_page=$('.active').attr('id');
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            switch ($('.active').attr('id')){
                case'index':
                    window.location.href = "about";
                break;
                case'about':
                    window.location.href = "skills";
                break;
                case'skills':
                    window.location.href = "portfolio";
                break;
                case'portfolio':
                    window.location.href = "contact";
                break;
                case'contact':
                break;
            };
        } else {
            switch ($('.active').attr('id')){
                case'index':
                break;
                case'about':
                    window.location.href = "index";
                break;
                case'skills':
                    window.location.href = "about";
                break;
                case'portfolio':
                    window.location.href = "skills";
                break;
                case'contact':
                    window.location.href = "portfolio";
                break;
            };
        }                       
    } 
    xDown = null;
    yDown = null;                                             
};