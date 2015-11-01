var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var num = document.getElementById("num").value;
    var number = parseInt(num);


    if (number > 1) {

        if (number == 2) {
            console.log(number + " is prime: " + true);
            jsConsole.write(number + " is prime: " + true);
        }
        else if (number % 2 !== 0) {
            var bool = true;
            for (var i = 3; i < number; i += 2) {
                if (number % i === 0) {
                    console.log(number + " is prime: " + false);
                    jsConsole.write(number + " is prime: " + false);
                    bool = false;
                    break;
                }
            }

            if (bool) {
                console.log(number + " is prime: " + true);
                jsConsole.write(number + " is prime: " + true);
            }
        }
        else {
            console.log(number + " is prime: " + false);
            jsConsole.write(number + " is prime: " + false);
        }

    }
    else {
        console.log(number + " is prime: " + false);
        jsConsole.write(number + " is prime: " + false);
    }
}