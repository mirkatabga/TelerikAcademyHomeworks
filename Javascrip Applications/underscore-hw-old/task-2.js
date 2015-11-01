/* Write function that finds the first name and last
name of all students with age between 18 and 24.
Use Underscore.js */

(function () {
	var _ = require('./node_modules/underscore/underscore-min.js'),
		students = require('./generate-students.js'),
		names = [];

	names = _.chain(students)
		.filter(function (student) {
			return student.age >= 18 && student.age <= 24;
		})
		.map(function (student) {
			return {
				firstName: student.firstName,
				lastName: student.lastName,
				age: student.age
			}
		})
		.value();

	console.log(names);
} ())