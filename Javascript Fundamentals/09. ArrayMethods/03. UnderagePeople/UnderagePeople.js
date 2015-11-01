(function () {
    var people = [['Peter', 'Petrov', 16, false], ['Ivan', 'Ivanov', 20, false], ['Mariika', 'Demireva', 14, true],
              ['Georgi', 'Nikolov', 21, false], ['Ivana', 'Stoyanova', 17, true], ['Pavlina', 'Momchilova', 21, true],
              ['Alexander', 'Petrov', 21, false], ['Stoyan', 'Hristov', 19, false], ['Teodora', 'Chavdarova', 21, true],
              ['Martin', 'Georgiev', 30, true]];

    var underaged = people.filter(function (personArr) {
        var isUnderaged = false;

        personArr.forEach(function (propValue) {
            if (parseInt(propValue)) {
                if (propValue < 18) {
                    isUnderaged = true;
                    return;
                }
            }
        })

        return isUnderaged;
    })

    console.log(underaged);
}());