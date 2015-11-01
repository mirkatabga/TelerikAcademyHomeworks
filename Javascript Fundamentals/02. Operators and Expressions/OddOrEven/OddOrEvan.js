var jsConsole;
var button = document.getElementById("check");
var inputValue;
var element
button.onclick = function () {
    jsConsole.clearConsole();
    element = document.getElementById("input");
    inputValue = element.value;
    OddOrEvan(inputValue);
};

function OddOrEvan(number) {
    if (!isNaN(number)) {
        number = parseFloat(number);
        number += 0.5;
        number = parseInt(number);
        if (number % 2 === 0) {
            console.log(number + " is " + "evan");
            jsConsole.write(number.toString() + " is " + "evan");
        }
        else {
            console.log(number + " is " + "odd");
            jsConsole.write(number.toString() + " is " + "odd");
        }
    }
    else {
        console.log("NaN");
        jsConsole.write("NaN");
        element.value = "";
    }
}