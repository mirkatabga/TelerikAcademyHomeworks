/* Write a function that by a given array of students
finds the student with highest marks */

(function () {	
	var _ = require('./node_modules/underscore/underscore-min.js'),
		students = require('./generate-students.js'),
		studentsWithHighestMarks,
		highestAverage = (_.max(students,function(student){
			return student.average;
		})).average
		
		studentsWithHighestMarks = _.filter(students,function(student){
			return student.average === highestAverage;
		})
		
		console.log(studentsWithHighestMarks);
} ())
