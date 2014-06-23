angular.module('roverApp')
  .animation('.previous-animation', function() {
  var animDuration = $(window).width() / 2;
  return {
    enter: function(element,done){
      $(element).css('left','').css('right','-100%').velocity({right:'0'},
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
      $(element).css('left','').css('right','0').velocity({right:'100%'},
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