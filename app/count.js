if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var x = start,
            interval = null;
        
        console.log(x);

        interval = setInterval(function(){
            x += 1;
            console.log(x);
            if(x === end) clearInterval(interval);
        }, 100);
        
        return {'cancel': function(){ clearInterval(interval); }};
    }
  };
});