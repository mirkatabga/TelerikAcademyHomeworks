module.exports = (function () {
	var id = 0,
		animal = Object.create({});

	Object.defineProperties(animal, {
		init: {
			value: function (species, legs) {
				this._id = ++id;
				this.species = species;
				this.legs = legs;

				return this;
			}
		},
		id: {
			get: function () {
				return this._id;
			}
		},
		species: {
			get: function () {
				return this._specie;
			},
			set: function (value) {
				this._species = value;
			}
		},
		legs: {
			get: function () {
				return this._legs;
			},
			set: function (value) {
				this._legs = value;
			}
		}
	})

	return animal;
} ())