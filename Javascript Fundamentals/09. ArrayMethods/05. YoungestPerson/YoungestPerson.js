/*Problem 5. Youngest person

Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find*/

if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

(function () {
    var people = [['Peter', 'Petrov', 20, false], ['Ivan', 'Ivanov', 20, false], ['Mariika', 'Demireva', 18, true],
                  ['Georgi', 'Nikolov', 21, false], ['Ivana', 'Stoyanova', 16, true], ['Pavlina', 'Momchilova', 21, true],
                  ['Alexander', 'Petrov', 21, false], ['Stoyan', 'Hristov', 19, false], ['Teodora', 'Chavdarova', 21, true],
                  ['Martin', 'Georgiev', 30, true]];

    var personsObjects = people.map(passPerson),
        minIndex = 0;


    var result = personsObjects.filter(function (obj) {
        return obj.gender === false; // or just !obj.gender
    })
    .find(function (male, index, array) {
        var isYoungest = true;
        array.forEach(function (item) {
            if (male.age > item.age) {
                isYoungest = false;
            }
        })

        return isYoungest;
    });

    console.log(result);
}());

function passPerson(array) {
    var obj = createPerson(array[0], array[1], array[2], array[3]);
    return obj;
}

function createPerson(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    }
}