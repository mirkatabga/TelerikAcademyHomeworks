/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation????
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
  //private common methods
  function isInt(n) {
    return isFinite(n) && n % 1 === 0;
  };
  //private validation methods
  function validateTitle(title) {
    if (typeof title === 'string') {
      if (title.length > 0) {
        var pattern = /  /g;

        if (title.search(pattern) != -1) {
          return false;
        }
        if (title[0] === ' ' || title[title.length - 1] === ' ') {
          return false;
        }
        return true;
      }
      return false;
    }
    return false;
  };

  function validateStudentNames(firstname, lastname) {
    if (firstname.length === 0 || lastname.length === 0) {
      return false;
    }
    if (firstname[0] === firstname[0].toUpperCase() && lastname[0] === lastname[0].toUpperCase()) {
      if (firstname.length === 1) {
        firstname = 'aa';
      }
      if (lastname.length === 1) {
        lastname = 'aa';
      }
      firstname = firstname.substr(1);
      lastname = lastname.substr(1);
      if (!/[^a-z]/.test(firstname + lastname)) {
        return true;
      }
      return false;
    }
    return false;
  };
 
  //The Course 'class'
  var Course = {
    init: function (title, presentations) {
      if (arguments.length < 2) {
        throw Error('init takes 2 arguments');
      }
      if (!validateTitle(title)) {
        throw Error('Invalid title in function init.');
      }
      if (presentations.length === 0) {
        throw Error('presentations must not be empty');
      }
      for (var i in presentations) {
        if (!validateTitle(presentations[i])) {
          throw Error('Invalid title in init presentations.');
        }
      }

      this.title = title;
      this.presentations = presentations;
      return this;
    },
    addStudent: function (name) {
      if (typeof name === 'string') {
        if (name.indexOf(' ') != -1) {
          var firstname = name.substr(0, name.indexOf(' ')),
            lastname = name.substr(name.indexOf(' ') + 1);

          if (validateStudentNames(firstname, lastname)) {
            if (!this.students) {
              this.students = [];
            }

            var id = this.students.length + 1;

            this.students.push({
              firstname: firstname,
              lastname: lastname,
              id: id
            });

            return id;
          }
          throw Error('Invalid name for student.')
        }
        throw Error('Invalid name for student. It. should be in format \'Firstname Lastname\'');
      }
      throw Error('Invalid name for student. It should be from type string.')
    },
    getAllStudents: function () {
      var studentsArr = [], i;

      for (i in this.students) {
        var student = this.students[i];
        studentsArr.push({
          firstname: student.firstname,
          lastname: student.lastname,
          id: student.id
        });
      }

      return studentsArr;
    },
    submitHomework: function (studentID, homeworkID) {
      if (isInt(homeworkID) && isInt(studentID)) {
        studentID = parseInt(studentID);
        homeworkID = parseInt(homeworkID);
        if (0 < homeworkID && homeworkID <= this.presentations.length) {
          if (0 < studentID && studentID <= this.students.length) {
            var studentIndex = studentID - 1;
            if (!this.students[studentIndex].hasOwnProperty('homeworks')) {
              this.students[studentIndex].homeworks = [];
            }
            if (this.students[studentIndex].homeworks.indexOf(homeworkID) == -1) {
              this.students[studentIndex].homeworks.push(homeworkID);
              return this;
            }
          }
        }
      }
      throw Error('Invalid id parsing');
    },
    pushExamResults: function (results) {
      var i, j, keys;
      if (arguments.length > 0) {
        if (results.constructor === Array) {
          if (results.length > 0) {
            for (i in results) {
              if (typeof results[i] === 'object') {
                keys = Object.keys(results[i]);
                if (keys.length === 2) {
                  if (keys[0] === 'StudentID' && keys[1] === 'score') {
                    if (isInt(results[i].StudentID) && isInt(results[i].score)) {
                      results[i].StudentID = parseInt(results[i].StudentID);
                      results[i].score = parseInt(results[i].score);

                      if (0 < results[i].StudentID && results[i].StudentID <= this.students.length) {
                        for (j in this.students) {
                          if (this.students[j].id === results[i].StudentID) {
                            if (!this.students[j].exam || this.students[j].exam === 0) {
                              this.students[j].exam = results[i].score;
                            }
                            else {
                              throw Error('Exam score can\'t be added twice');
                            }
                          }
                        }
                      }
                      else {
                        throw Error('Invalid range for StudentID');
                      }
                    }
                    else {
                      throw Error('Each prop in examResult shuld be parsable to int');
                    }
                  }
                  else {
                    throw Error('Props should have names: StudentID and score.');
                  }

                }
                else {
                  throw Error('Count of properties in examResult should be 2');
                }
              }
              else {
                throw Error('Typeof result should be object');
              }
            }

            for (i in this.students) {
              if (!this.students[i].exam) {
                this.students[i].exam = 0;
              }
            }
            return this;
          }
        }
      }
      throw Error('Invalid results');
    },

    getTopStudents: function () {
      var i,
        allHomeworks,
        studentHomeworks,
        studentExam,
        pointsHw,
        pointsExam,
        topStudents = [];

      allHomeworks = this.presentations.length;

      for (i in this.students) {
        if (!this.students[i].homeworks) {
          this.students[i].homeworks = [];
        }

        studentHomeworks = this.students[i].homeworks.length;
        studentExam = this.students[i].exam;
        pointsHw = (studentHomeworks / allHomeworks) * 25;
        pointsExam = (studentExam / 200) * 75;
        this.students[i].finalscore = pointsHw + pointsExam;
      }

      topStudents = this.students;

      topStudents.sort(function (a, b) {
        return b.finalscore - a.finalscore;
      });

      if (topStudents.length > 10) {
        while(topStudents.length > 10){
          topStudents.pop();
        }
      }
      
      return topStudents;
    }
  };

  return Course;
}

//module.exports = solve;
