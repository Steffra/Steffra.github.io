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

var gesture = {
    x: [],
    y: [],
    match: ''
  },
  tolerance = 30;
window.addEventListener('touchstart',function(e){
    for (i=0;i<e.touches.length;i++){
    var dot = document.createElement('div');
    dot.id = i
    dot.style.top = e.touches[i].clientY-25+'px'
    dot.style.left = e.touches[i].clientX-25+'px'
    document.body.appendChild(dot)
    gesture.x.push(e.touches[i].clientX)
    gesture.y.push(e.touches[i].clientY)
    }
});
window.addEventListener('touchmove',function(e){
    for (var i=0; i<e.touches.length; i++) {
    var dot = document.getElementById(i);
    dot.style.top = e.touches[i].clientY-25+'px'
    dot.style.left = e.touches[i].clientX-25+'px'
    gesture.x.push(e.touches[i].clientX)
    gesture.y.push(e.touches[i].clientY)
    }
});
window.addEventListener('touchend',function(e){
var dots = document.querySelectorAll('div'),
    xTravel = gesture.x[gesture.x.length-1] - gesture.x[0],
    yTravel = gesture.y[gesture.y.length-1] - gesture.y[0];
if (yTravel<tolerance && yTravel>-tolerance && xTravel<-tolerance){
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
}
if (yTravel<tolerance && yTravel>-tolerance && xTravel>tolerance){
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
if (gesture.match!==''){
}

gesture.x = []
gesture.y = []
gesture.match = xTravel = yTravel = ''
for (i=0;i<dots.length;i++){
  dots[i].id = ''
  
}
})
