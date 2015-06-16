var jsConsole;

(function () {

    function personBuilder(firstName,lastName,age) {
        var person = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        return person;
    };

    var gosho = personBuilder('gosho', 'goshev', 28),
        pesho = personBuilder('pesho', 'peshov', 25),
        babaGina = personBuilder('gina', 'gineva', 67),
        youngestPerson = personBuilder();
        persons = [gosho, pesho, babaGina],
        minAge = Number.MAX_VALUE;

    for (var obj in persons) {
        printObj(persons[obj]);
        if (hasProperty(persons[obj],"age")) {
            if (parseInt(persons[obj].age) < minAge) {
                minAge = persons[obj].age;
                youngestPerson = copyObj(persons[obj]);
            }
        }
        jsConsole.writeLine("----------------------------------------------------");
    }

    jsConsole.writeLine("Youngest person: " + youngestPerson.firstName + " " + youngestPerson.lastName);

   
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