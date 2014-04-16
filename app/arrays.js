if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(a, x){ return a + x; });
    },

    remove : function(arr, item) {
        return arr.filter(function(x){ return x !== item; });
    },

    removeWithoutCopy : function(arr, item) {
        return arr.reduceRight(function(a, x, i){
            if(x === item) a.splice(i, 1);
            return a;
        }, arr);
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function(x){ return x === item; }).length;
    },

    duplicates : function(arr) {
        var results = arr.reduce(function(a, x){
            var uniques = a[0],
                dupes = a[1];

            if(dupes.indexOf(x) > -1) return a;
            
            if(uniques.indexOf(x) > -1) {
                dupes.push(x);
            } else {
                uniques.push(x);
            }
            
            return a;
        }, [[],[]]);

        return results[1];
    },

    square : function(arr) {
        return arr.map(function(x){ return x * x; });
    },

    findAllOccurrences : function(arr, target) {
        return arr.reduce(function(a, item, i){
            if(target === item) a.push(i);
            return a;
        }, []);
    }
  };
});
