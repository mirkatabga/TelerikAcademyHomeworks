/*Write a method that from a given array of students
finds all students whose first name is before its last
name alphabetically. Print the students in
descending order by full name. Use Underscore.js */

(function () {
	var _ = require('./node_modules/underscore/underscore-min.js'),
		students = require('./generate-students.js');
		// studentsSortedByCriteries = []; // criteries: 1. find all students whose first name is before its last, 
										// //            2. sort by descending order of full name.   
			
		// _.forEach(students,function(student){
			// student.fullName = student.firstName + " " + student.lastName;
		// })
			
		// studentsSortedByCriteries = _.chain(students)
			// .reject(function (student) {
				// return student.firstName < student.lastName;
			// })
			// .sortBy(function(student){
				// return student.fullName();
			// })
			// .reverse()
			// .each(function(student){
				// console.log(student.fullName());
			// })
			// .value();
			
			    var studentsSortedByCriteries = []; // criteries: 1. find all students whose first name is before its last, 
													//            2. sort by descending order of full name.   
    		
    studentsSortedByCriteries = _.filter(students, function (student) {
      return student.firstName < student.lastName;
    })

    studentsSortedByCriteries.sort(function(studentA,studentB){
      if((studentA.firstName + ' ' + studentA.lastName) < (studentB.firstName + ' ' + studentB.lastName)){
        return 1;
      }
      else{
        return -1;
      }
    })
    
    //studentsSortedByCriteries.reverse();

    _.forEach(studentsSortedByCriteries, function (student) {
      console.log(student.firstName + " " + student.lastName)
    })
			
} ())