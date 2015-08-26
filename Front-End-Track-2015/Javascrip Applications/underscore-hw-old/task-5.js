/*By a given array of animals, find the total number of
legs */

(function(){
	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('./node_modules/underscore/underscore-min.js');
	}
	
	var animals = require('./generate-animals.js'),
	legsCount = 0;
	
	legsCount = _.reduce(animals, function(memo,curr){
		return memo + curr.legs;
	},0)
	
	console.log(legsCount);
}())