if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var d = $.Deferred();
        setTimeout(function() { d.resolve(value); }, 10);
        return d.promise();
    },

    manipulateRemoteData : function(url) {
        var d = $.Deferred();
        
        $.get(url).then(function(data){
            var people = data.people.map(function(x){ return x.name; });
            d.resolve(people.sort());
        });

        return d.promise();
    }
  };
});
