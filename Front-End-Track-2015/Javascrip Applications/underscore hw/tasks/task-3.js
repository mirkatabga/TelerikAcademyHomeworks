/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
    return function (students) {
        var ninja = _.chain(students)
            .map(function (student) {
                return {
                    fullName: student.firstName + ' ' + student.lastName,
                    average: _.reduce(student.marks, function (result, mark) {
                        return result + mark;
                    }, 0) / student.marks.length
                }
            })
            .max(function (student) {
                return student.average;
            })
            .value();

        console.log(ninja.fullName + ' has an average score of ' + ninja.average);
    };
}

module.exports = solve;
