if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var d = $.Deferred();
        d.resolve(value);
        return d.promise();
    },

    manipulateRemoteData : function(url) {
        var d = $.Deferred();
        
        $.get(url, function(data){
            var people = data.people.map(function(x){ return x.name; });
            people.sort();
            d.resolve(people);
        });

        return d.promise();
    }
  };
});
