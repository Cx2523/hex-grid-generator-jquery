function spin(){
  var angle = 0;
  console.log(this);
  var thisHtmlObj = this;
  var timer = window.setInterval(function(){
      angle = angle + 2;
      $(thisHtmlObj).css({transform:'rotateY(' + angle + 'deg)'});
      console.log(angle);

      if (angle > 720){
        window.clearTimeout(timer);
      }
  },1);
}
