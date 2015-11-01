module.exports = (function () {
	var animal = require('./animal.js'),
		animals = {
			lion: 4,
			cat: 4,
			dog: 4,
			hourse: 4,
			deer: 3,
			eagle: 2,
			falcon: 2,
			duck: 2,
			someBird: 2,
			anotherSomeAnimalWith100Legs: 100
		},
		animalsObjects = [];
		
		var keys = Object.keys(animals);

	for (var i = 0; i < 100; i += 1) {
		var randomKeyIndex = Math.floor(Math.random() * keys.length);
		var randomKey = keys[randomKeyIndex];
		var currAnimal = Object.create(animal).init(randomKey,animals[randomKey]);
		
		animalsObjects.push(currAnimal);
	}
	
	return animalsObjects;
} ())