var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var number = document.getElementById("number").value;
    number = parseInt(number);
    var binary = number.toString(2);
    console.log(binary);
    jsConsole.write(number + " - ");
    jsConsole.write(binary + " - ");

    var mask = 1 << 2;
    console.log(mask);
    if ((number & mask) == mask) {
        console.log(true);
        jsConsole.write(true);
    }
    else {
        console.log(false);
        jsConsole.write(false);
    }
}