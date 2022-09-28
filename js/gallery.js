$(document).on('click','.gg-element',function(){
  var selected=$(this);
  var prev=$(this).prev().find('img');
  var next=$(this).next().find('img');
  var prevaltimg=$(this).prev().find('p');
  var nextaltimg=$(this).next().find('p');
  var l=$(".gg-element").length-1;
  var p=$(".gg-element").index(selected);
  var content=buttons();
  
  function buttons(){
    if (l > 1) {
      if (p == 0){
        return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div>';
      }
      else if (p == l) {
        return '<div class="gg-close gg-bt">&times</div><div class="gg-prev gg-bt">&larr;</div>';
      }
      else{
        return '<div class="gg-close gg-bt">&times</div><div class="gg-nxt gg-bt">&rarr;</div><div class="gg-prev gg-bt">&larr;</div>';
      }
    }
    else{
      return '<div class="gg-close gg-bt">&times</div>';
    }
  }
  buttons();
  
  $('#gg-screen').show();
  $("#gg-screen").html('<div class="gg-image"></div>' + content);
  $(".gg-image").html('<img src="'+ $('img', this).attr('src') +'">' + '<p class="gg-image-alt">' + $('p', this).text() + '</p>');
  $("body").css('overflow','hidden');
  
  $(document).on('click','.gg-close',function(){
    $("#gg-screen").hide();
    $("body").css('overflow','auto');
  });
  $("#gg-screen").on('click', function(e) {
    if (e.target == this){
      $("#gg-screen").hide();
      $("body").css('overflow','auto');
    }
  });
  
  $(document).on('click','.gg-prev',function(){
    selected=selected.prev();
    prev=selected.find('img');
    prevaltimg=selected.find('p');
    var previmg='<img src="'+ prev.attr('src') +'">' + '<p class="gg-image-alt">' + prevaltimg.text() + '</p>';
    $(".gg-image").html(previmg);
    p=$(".gg-element").index(selected);
    buttons();
    content=buttons();
    $("#gg-screen").html('<div class="gg-image">'+ previmg + '</div>'  + content);
  });
  
  $(document).on('click','.gg-nxt',function(){
    selected=selected.next();
    next=selected.find('img');
    nextaltimg=selected.find('p');
    var nxtimg='<img src="'+ next.attr('src') +'">' + '<p class="gg-image-alt">' + nextaltimg.text() + '</p>';
    $(".gg-image").html(nxtimg);
    p=$(".gg-element").index(selected);
    buttons();
    content=buttons();
    $("#gg-screen").html('<div class="gg-image">'+ nxtimg + '</div>'  + content);
  });
  
  $(document).on('keydown',function(e) {
    if(e.keyCode == 37 && p>0) {
      selected=selected.prev();
      prev=selected.find('img');
      prevaltimg=selected.find('p');
      var previmg='<img src="'+ prev.attr('src') +'">' + '<p class="gg-image-alt">' + prevaltimg.text() + '</p>';
      $(".gg-image").html(previmg);
      p=$(".gg-element").index(selected);
      buttons();
      content=buttons();
      $("#gg-screen").html('<div class="gg-image">'+ previmg + '</div>'  + content);
    }
    else if(e.keyCode == 39 && p < l) {
      selected=selected.next();
      next=selected.find('img');
      var nxtimg='<img src="'+ next.attr('src') +'">' + '<p class="gg-image-alt">' + nextaltimg.text() + '</p>';
      $(".gg-image").html(nxtimg);
      p=$(".gg-element").index(selected);
      buttons();
      content=buttons();
      $("#gg-screen").html('<div class="gg-image">'+ nxtimg + '</div>'  + content);
    }
  });
  
});