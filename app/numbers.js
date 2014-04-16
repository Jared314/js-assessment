if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var number = num.toString(2).split('');
        return parseInt(number[number.length - bit], 2);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var result = num.toString(2);
        return '00000000'.slice(0, -result.length) + result;
    },

    multiply: function(a, b) {
        var f = function(x){ return ((x - Math.floor(x)).toString().length - 2); },
            p = Math.max(f(a), f(b));
        return parseFloat((a * b).toPrecision(p));
    }
  };
});

