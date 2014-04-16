if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(s){ return str + ', ' + s; };
    },

    makeClosures : function(arr, fn) {
        return arr.map(function(x){ return fn.bind(null, x); });
    },

    partial : function(fn, str1, str2) {
        return fn.bind(null, str1, str2);
    },

    useArguments : function() {
        return Array.prototype.slice.call(arguments)
                 .reduce(function(a, x){ return a + x; }, 0);
    },

    callIt : function(fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);

        return function(){
            return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
        };
    },

    curryIt : function(fn) {
        var args = [],
            f = null,
            t = this;

        f = function(x){
            args.push(x);
            if(args.length === fn.length) return fn.apply(t, args);
            return f;
        };

        return f;
    }
  };
});
