//object literal

var Repeater = {

	repeatString: function(str,n) {
 		stringRepeater = ""
 		for (var i = 0; i < n; i++) {
 			stringRepeater += str
 		}
 		return stringRepeater
 	},

	repeatFunction: function(f,n) {
 		functionRepeater = ""
 		for (var i = 0; i < n; i++) {
 			functionRepeater += f()
 		}
 		return functionRepeater
 }

}

console.log(Repeater.repeatString("cat",3))
Repeater.repeatFunction(function() { console.log('hi') }, 3)