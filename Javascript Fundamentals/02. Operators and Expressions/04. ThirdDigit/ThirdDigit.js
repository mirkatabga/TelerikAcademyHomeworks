var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var number = document.getElementById("number").value;

    if (number > 699) {
        for (var i = 0; i < 3; i++) {
            var digit = number % 10;
            console.log(digit);
            number /= 10;
            number = parseInt(number);

            if (i === 2) {
                if (digit === 7) {
                    console.log(true);
                    jsConsole.write(true);
                }
                else {
                    console.log(false);
                    jsConsole.write(false);
                }
            }
        }
    }
    else {
        console.log(false);
        jsConsole.write(false);
    }
};

