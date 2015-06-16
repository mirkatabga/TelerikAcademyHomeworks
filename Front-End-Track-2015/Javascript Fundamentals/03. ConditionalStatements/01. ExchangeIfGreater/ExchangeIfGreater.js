var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    a = parseFloat(a.value);
    b = parseFloat(b.value);

    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }

    console.log(a + " " + b);
    jsConsole.write(a + " " + b);
}