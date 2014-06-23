angular.module('roverApp')
  .animation('.next-animation', function() {
  var animDuration = $(window).width() / 2;
  return {
    enter: function(element,done){
      $(element).css('right','').css('left','-100%').velocity({left:'0'},
        {
          easing:'ease',
          duration:animDuration,
          complete:function(){
            done();
          }
        }
      );
    },
    leave: function(element,done){
      $(element).css('right','').css('left','0').velocity({left:'100%'},
        {
          easing:'ease',
          duration:animDuration,
          complete:function(){
            done();
          }
        }
      );
    }
  };
});