/* Write a function that by a given array of animals,
groups them by species and sorts them by number of legs */

(function () {

	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('./node_modules/underscore/underscore-min.js');
	}

	var animals = require('./generate-animals.js');

	var groups = _.groupBy(animals, '_species');
	
	var arr = []

	_.each(groups, function (group) {
		arr.push(group);
	})

	arr.sort(function(currArr,nextArr){
		var currFirstLegs = _.first(currArr).legs,
			nextFirstLegs = _.first(nextArr).legs;
			
			return currFirstLegs > nextFirstLegs ? 1 : -1;
	})
	
	console.log(arr);

} ())