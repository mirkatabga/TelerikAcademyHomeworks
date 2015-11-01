module.exports = (function () {
	function roundToTwo(num) {
		return +(Math.round(num + "e+2") + "e-2");
	}
	
	var studentId = 0;
	var student = Object.create({});

	Object.defineProperties(student, {
		init: {
			value: function (firstName, lastName, age, marks) {
				this._id = ++studentId;
				this.firstName = firstName;
				this.lastName = lastName;
				this.age = age;

				if (Array.isArray(marks)) {
					this._marks = marks;
					this._average = roundToTwo(marks.reduce(function (markA, markB) {
						return markA + markB;
					}, 0) / marks.length)
				}

				return this;
			}
		},
		id: {
			get: function () {
				return this._id;
			}
		},
		firstName: {
			get: function () {
				return this._firstName;
			},
			set: function (value) {
				if (typeof value === 'string') {
					this._firstName = value;
				}
			}
		},
		lastName: {
			get: function () {
				return this._lastName;
			},
			set: function (value) {
				if (typeof value === 'string') {
					this._lastName = value;
				}
			}
		},
		age: {
			get: function () {
				return this._age;
			},
			set: function (value) {
				if (typeof value === 'number') {
					this._age = value;
				}
			}
		},
		marks: {
			get: function () {
				return this._marks
			},
			set: function (array) {
				if (Array.isArray(array)) {
					this._marks = array
				}
			}
		},
		average: {
			get: function () {
				return this._average;
			}
		},
		fullName: {
			value: function () {
				return this.firstName + ' ' + this.lastName;
			}
		}
	})

	return student;
} ())