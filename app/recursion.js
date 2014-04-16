if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var t = this,
            flag = (!dirName || data.dir === dirName),
            newDirName = data.dir === dirName ? null : dirName;

        return data.files.reduce(function(a, x) {
          if (x.files) return a.concat(t.listFiles(x, newDirName));
          if (flag) a.push(x);
          return a;
        }, []);
    },

//TODO: Refactor
    permute: function(arr) {
        if(arr.length === 1) return [arr];

        var a = null,
            b = null,
            result = [],
            j = function(x){ var r = x.slice(0); r.unshift(a); return r; },
            t = null;

        for (var i = 0; i < arr.length; i++) {
            b = arr.slice(0);
            a = b.splice(i, 1)[0];
            result = result.concat(this.permute(b).map(j));
        }

        return result;
    }
  };
});
