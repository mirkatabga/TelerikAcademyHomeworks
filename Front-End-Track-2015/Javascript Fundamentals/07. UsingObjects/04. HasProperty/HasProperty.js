var jsConsole;

(function () {

    function carBuilder(brand, model, year, type, gearsCount, gearboxType) {
        var car = {
            brand: brand,
            model: model,
            year: year,
            type: type,
            gearbox: {
                gearsCount: gearsCount,
                gearboxType: gearboxType
            }
        }
        return car;
    };

    var myCar = carBuilder("opel", "mokka", 2014, "suv", 6,"menual");
    printObj(myCar);

    var prop = "year",
        hasProp = hasProperty(myCar, prop);

    if (hasProp) {
        jsConsole.writeLine("The property \'" + prop + "\' exists. " )
    }
    else {
        jsConsole.writeLine("There is no such property - " + prop);
    }
   
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

}());