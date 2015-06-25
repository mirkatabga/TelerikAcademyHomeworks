/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
	var Person = (function () {
		//validation functions
		function validateName(name) {
			if (typeof name === 'string' && name.length > 2 && name.length < 21) {
				var pattern = /([^A-z])/g;
				if (name.match(pattern)) {
					return false;
				}

				return true;
			}
			else {
				return false;
			}
		};

		function validateAge(age) {
			if (isFinite(age) && age > 0 && age < 151) {
				return true;
			}
			else {
				return false;
			}
		};
		
		//constructor
		function Person(firstname, lastname, age) {
			switch (arguments.length) {
				case 1: {
					this.firstname = firstname;
				} break;
				case 2: {
					this.firstname = firstname;
					this.lastname = lastname;
				} break;
				case 3: {
					this.firstname = firstname;
					this.lastname = lastname;
					this.age = age;
				} break;
			}
		}

		Object.defineProperties(Person.prototype, {
			'firstname': {
				get: function () {
					return this._firstname;
				},
				set: function (firstname) {
					if (validateName(firstname)) {
						this._firstname = firstname;
						return this;
					}
					else {
						throw Error('Invalid firstname.');
					}
				}
			},
			'lastname': {
				get: function () {
					return this._lastname;
				},
				set: function (lastname) {
					if (validateName(lastname)) {
						this._lastname = lastname;
						return this;
					}
					else {
						throw Error('Invalid lastname');
					}
				}
			},
			'age': {
				get: function () {
					return this._age;
				},
				set: function (age) {
					if (validateAge(age)) {
						age = parseFloat(age);
						this._age = age;
						return this;
					}
					else {
						throw Error('Invalid age.');
					}
				}
			},
			'fullname': {
				get: function () {
					return this.firstname + ' ' + this.lastname;
				},
				set: function (names) {
					var namesArr = names.split(' ');
					this.firstname = namesArr[0];
					this.lastname = namesArr[1];
					return this;
				}

			}
		});

		Person.prototype.introduce = function () {
			return ('Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old');
		};

		return Person;
	}());
	
	return Person;
}


module.exports = solve;