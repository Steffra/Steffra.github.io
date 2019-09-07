//sidebar mouseover actions
  $('.hovertext, .icon').hover(function(){
    myarray=["one", "two", "three", "four", "five", ]
    if(jQuery.inArray($(this).prop('id'), myarray) !== -1){
      $(this).css("opacity","0");
      $(this).next().css("opacity","1")
    }else{
      $(this).css("opacity","1");
      $(this).prev().css("opacity","0")
    }
  });
  $('.hovertext, .icon').mouseout(function(){
    myarray=["one", "two", "three", "four", "five", ]
    if(jQuery.inArray($(this).prop('id'), myarray) !== -1){
      $(this).css("opacity","1");
      $(this).next().css("opacity","0");
    }else{
      $(this).css("opacity","0");
      $(this).prev().css("opacity","1");
    }
  });
  $('.flat-button').hover(function(){
    $(this).children().css("color","#222");
  });
  $('.flat-button').mouseout(function(){
    $(this).children().css("color","#08fdd8");
  });