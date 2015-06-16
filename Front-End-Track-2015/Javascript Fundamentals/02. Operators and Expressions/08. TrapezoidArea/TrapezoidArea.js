var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var h = document.getElementById("h").value;

    var aSide = parseFloat(a);
    var bSide = parseFloat(b)
    var height = parseFloat(h)

    var area = ((aSide + bSide) * height) / 2;
    area = +area.toFixed(7);
    jsConsole.write("The area of the trapezoid is: " + area);
    console.log("The area of the trapezoid is: " + area);
}