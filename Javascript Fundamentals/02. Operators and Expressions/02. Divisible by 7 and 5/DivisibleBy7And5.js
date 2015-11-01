var jsConsole;
var input;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    input = document.getElementById("input").value;

    if (!isNaN(input)) {
        isDivisivle(input);
    }
    else {
        console.log("NaN");
        jsConsole.write("NaN");
    }

    document.getElementById("input").value = "";
};

function isDivisivle(number) {

    if (number % 7 === 0 && number % 5 === 0) {
        console.log(number.toString() + " IS divisible by 7 and 5 at ones");
        jsConsole.write(number.toString() + " IS divisible by 7 and 5 at ones");
    }
    else {
        console.log(number.toString() + " isn't divisible by 7 and 5 at ones");
        jsConsole.write(number.toString() + " isn't divisible by 7 and 5 at ones");
    }
}

