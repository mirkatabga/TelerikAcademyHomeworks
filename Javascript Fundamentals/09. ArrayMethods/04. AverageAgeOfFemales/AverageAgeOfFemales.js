﻿(function () {
    var people = [['Peter', 'Petrov', 20, false], ['Ivan', 'Ivanov', 20, false], ['Mariika', 'Demireva', 18, true],
                  ['Georgi', 'Nikolov', 21, false], ['Ivana', 'Stoyanova', 16, true], ['Pavlina', 'Momchilova', 21, true],
                  ['Alexander', 'Petrov', 21, false], ['Stoyan', 'Hristov', 19, false], ['Teodora', 'Chavdarova', 21, true],
                  ['Martin', 'Georgiev', 30, true]];

    var personsObjects = people.map(passPerson);
    var countOfFemales = 0;

    var result = personsObjects.filter(function (obj) {
        return obj.gender === true; // or just obj.gender
    })
    .reduce(function (sum, female, index, array) {
        if (index === array.length - 1) {
            return parseFloat((sum += female.age) / array.length);
        }

        return sum += female.age;
    }, 0);

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