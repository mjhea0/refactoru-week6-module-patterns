// object literal

var Repeater = {

  repeatString: function(str,n) {
    var stringRepeater = "";
    for (var i = 0; i < n; i++) {
      stringRepeater += str;
    };
    return stringRepeater;
  },

  repeatFunction: function(f,n) {
    var functionRepeater = "";
    for (var i = 0; i < n; i++) {
      functionRepeater += f();
    }
    return functionRepeater;
  }

};


// module patern

var Repeater = (function() {
  
  var count = 0;

  return {

    repeatString: function(str,n) {
      var stringRepeater = "";
      for (var i = 0; i < n; i++) {
        stringRepeater += str;
      }
      return stringRepeater;
    },

    repeatFunction: function(f,n) {
      var functionRepeater = "";
      for (var i = 0; i < n; i++) {
        functionRepeater += f();
      }
      return functionRepeater;
    },
    
    repeatMore: function(str) {
      var singleRepeat = "";
      for (var i = 0; i <= count; i++) {
        singleRepeat += str;
      }
      count++
      return singleRepeat;
    }

  }
})()

// revealing module pattern

var Repeater = (function() {
  var count = 0;

  function repeatString(str,n) {
    stringRepeater = "";
    for (var i = 0; i < n; i++) {
      stringRepeater += str;
    }
    return stringRepeater;
  }

  function repeatFunction(f,n) {
    functionRepeater = "";
    for (var i = 0; i < n; i++) {
      functionRepeater += f();
    }
    return functionRepeater;
  }
  
  function repeatMore(str) {
    singleRepeat = "";
    for (var i = 0; i <= count; i++) {
      singleRepeat += str;
    }
    count++
    return singleRepeat;
  }

  return {
    repeatString: publicrepeatString,
    repeatString: publicrepeatString,
    repeatMore:   publicrepeatMore
  }

})()


