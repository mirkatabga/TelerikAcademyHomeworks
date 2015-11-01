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

    var myCar = carBuilder("opel", "mokka", 2014, "suv", 6, "menual"),
        copiedCar = getDeepCopy(myCar);

    console.log(myCar);
    jsConsole.writeLine("----------------------Original object--------------------");
    printObj(copiedCar);

    console.log(copiedCar);
    jsConsole.writeLine("----------------------Copied object--------------------");
    printObj(copiedCar);

    copiedCar.brand = "Mercedes";
    copiedCar.model = "GL";
    copiedCar.gearbox.gearboxType = "auto";
    copiedCar.year = 2015;

    jsConsole.writeLine();
    jsConsole.writeLine();
    jsConsole.writeLine("Changed referenced types and primitive types! ");
    jsConsole.writeLine();
    jsConsole.writeLine();

    console.log(myCar);
    jsConsole.writeLine("----------------------Original object--------------------");
    printObj(myCar);

    console.log(copiedCar);
    jsConsole.writeLine("----------------------Copied object--------------------");
    printObj(copiedCar);


    function getDeepCopy(obj) {
        var copy = JSON.parse(JSON.stringify(obj));
        return copy;
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