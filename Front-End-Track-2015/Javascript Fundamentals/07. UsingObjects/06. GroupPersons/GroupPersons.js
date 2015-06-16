var jsConsole;

(function () {

    function personBuilder(firstName, lastName, age) {
        var person = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        return person;
    };

    var gosho = personBuilder('gosho', 'goshev', 28),
        pesho = personBuilder('pesho', 'armagedonov', 25),
        babaGina = personBuilder('gina', 'gineva', 67),
        people = [gosho, pesho, babaGina];

    jsConsole.writeLine("-------------------NOT sorted objects.--------------------");
    for (var obj in people) {
        printObj(people[obj]);
        jsConsole.writeLine();
    }

    var groupedByFirstName = group(people, 'firstName');
    console.log(groupedByFirstName);
    jsConsole.writeLine("------------------Sorted By First Name.-------------------");
    for (var obj in groupedByFirstName['firstName']) {
        printObj(groupedByFirstName['firstName'][obj]);
        jsConsole.writeLine();
    }

    var groupedByLastName = group(people, 'lastName');
    console.log(groupedByLastName);
    jsConsole.writeLine("------------------Sorted By Last Name.-------------------");
    for (var obj in groupedByLastName['lastName']) {
        printObj(groupedByLastName['lastName'][obj]);
        jsConsole.writeLine();
    }

    var groupedByAge = group(people, 'age');
    console.log(groupedByAge);
    jsConsole.writeLine("------------------Sorted By Age.-------------------");
    for (var obj in groupedByAge['age']) {
        printObj(groupedByAge['age'][obj]);
        jsConsole.writeLine();
    }

    function group(people, key) {
        switch (group.arguments[1]) {
            case 'firstName': {
                groupByFirstName(people);
            } break;
            case 'lastName': {
                groupByLastName(people);
            } break;
            case 'age': {
                groupByAge(people);
            } break;
            default: {
                console.log("Error, no such property.");
            } break;
        }

        var arr = {};
        arr['firstName'] = people;
        arr['lastName'] = people;
        arr['age'] = people;

        return arr;

        function groupByFirstName(people) {
            people.sort(function (a, b) {
                return a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
            })
        };

        function groupByLastName(people) {
            people.sort(function (a, b) {
                return a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0
            })
        };

        function groupByAge(people) {
            people.sort(function (a, b) {
                return a.age - b.age;
            })
        }
    };

    function hasProperty(obj, prop) {
        return obj.hasOwnProperty(prop);
    }

    function printObj(obj) {
        if (obj === null || typeof (obj) !== 'object') {
            jsConsole.writeLine(obj);
            return 0;
        }

        for (var prop in obj) {
            jsConsole.write(prop + " ");
            printObj(obj[prop]);
        }
    }

    function copyObj(obj) {
        var copy = JSON.parse(JSON.stringify(obj));
        return copy;
    }

}());