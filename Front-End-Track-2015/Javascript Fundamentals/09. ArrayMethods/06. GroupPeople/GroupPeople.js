(function () {
    var people = [['Peter', 'Petrov', 20, false], ['Ivan', 'Ivanov', 20, false], ['Mariika', 'Demireva', 18, true],
                  ['Georgi', 'Nikolov', 21, false], ['Ivana', 'Stoyanova', 16, true], ['Pavlina', 'Momchilova', 21, true],
                  ['Alexander', 'Petrov', 21, false], ['Stoyan', 'Hristov', 19, false], ['Teodora', 'Chavdarova', 21, true],
                  ['Martin', 'Georgiev', 30, true]];

    var arrayOfPersons = people.map(passPerson);


    console.log('Groups by first letter of name: ');
    var groups = arrayOfPersons.reduce(function (gr, person) {
        var letter = person.firstName[0];

        if (gr[letter]) {
            gr[letter].push(person);
        } else {
            gr[letter] = [person];
        }

        return gr;
    }, {});

    console.log(groups);
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