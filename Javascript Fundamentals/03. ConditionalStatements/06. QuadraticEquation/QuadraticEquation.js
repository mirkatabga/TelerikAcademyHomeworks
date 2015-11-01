var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var aElement = document.getElementById("a");
    var bElement = document.getElementById("b");
    var cElement = document.getElementById("c");

    var a = parseFloat(aElement.value);
    var b = parseFloat(bElement.value);
    var c = parseFloat(cElement.value);
    var determinates = (b * b) - (4 * a * c);

    if (determinates > 0) {
        var xOne = (-b - Math.sqrt(determinates)) / (2 * a);
        var xTwo = (-b + Math.sqrt(determinates)) / (2 * a);
        console.log("x1 = " + xOne + " x2 = " + xTwo);
        jsConsole.write("x1 = " + xOne + " x2 = " + xTwo);
    }
    else if (determinates < 0) {
        console.log("no real roots");
        jsConsole.write("no real roots");
    }
    else {
        var x = -b / (2 * a);
        console.log("x1 = x2 = " + x);
        jsConsole.write("x1 = x2 = " + x);
    }

}