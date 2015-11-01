var jsConsole;

(function () {
    appearanceCount();

    var checkBoxAuto = document.getElementById("autoTesting");
    checkBoxAuto.onchange = function () {
        jsConsole.clearConsole();

        if (checkBoxAuto.checked) {
            document.getElementById("count").style.display = "none";
            document.getElementById("input").style.display = "none";
            document.getElementById("number").style.display = "none";
            document.getElementById("check").style.display = "none";

            automatedTesting();
        }
        else {
            document.getElementById("count").style.display = "inline-block";
            document.getElementById("input").style.display = "inline-block";
            document.getElementById("number").style.display = "inline-block";
            document.getElementById("check").style.display = "inline-block";
        }

        function automatedTesting() {

            var arrays = [[2,4,6,8],[1, 2, 3, 4, 5, 6, 1, 8, 9, 10], [-123, 323, 0, 3213, 0, 1111, 323, 0, 1],
                [12.2, 3, -10.5, 4, 12.2, 12.21, toString(12.2), 12.2], [], [2, 0, 12, 0, 0, 23, 12, 12, 12, 12, 0]];
            var tests = [2.23, 1, 3213, 12.2, , 0];
            var expected = [0, 2, 1, 3, NaN.value, 4];

            for (var i in arrays) {
                jsConsole.writeLine("-------------------Test " + i + " -------------------");
                jsConsole.writeLine("Array: " + arrays[i].join(", "));
                jsConsole.writeLine("Number: " + tests[i]);
                jsConsole.writeLine("Expected result: " + expected[i]);

                var result = appearanceCount(arrays[i], tests[i]);

                jsConsole.writeLine("Received: " + result);

                if (result === expected[i]) {
                    jsConsole.writeLine("CORRECT!");
                }
                else {
                    jsConsole.writeLine("WRONG!");
                }
            }
        }
    }

    function appearanceCount(array, number) {
        var count = 0;

        switch (appearanceCount.arguments.length) {
            case 0: {
                count = appearanceCountNoArgs();
            } break;
            case 2: {
                count = appearanceCountWithArgs(array, number);
            } break;
            default:
                console.log("argument error when appearanceCount is called");
                break;
        }

        function appearanceCountNoArgs() {
            var buttonInput = document.getElementById("input");
            var buttonCheck = document.getElementById("check");

            buttonInput.onclick = function () {
                jsConsole.clearConsole();

                var countUser = document.getElementById("count").value,
                    arr = userInputArr(countUser);

                buttonCheck.onclick = function () {
                    if (!arr) {
                        return;
                    }

                    var numberUser = document.getElementById("number").value;
                    var result = appearanceCountWithArgs(arr, numberUser);

                    jsConsole.writeLine("Number " + numberUser);
                    jsConsole.writeLine("Result " + result);
                }
            }
        }

        function appearanceCountWithArgs(array, number) {
            var count = 0;

            if (isNaN(number)) {
                return NaN;
            }
            else {
                number = parseFloat(number);

                for (var i = 0, len = array.length; i < len; i++) {
                    if (number === array[i]) {
                        count++;
                    }
                }

                return count;
            }
        }

        //appearanceCount(the main one) return statemant
        return count;
    }

    function userInputArr(length) {
        var arr = [];

        jsConsole.write("array: ");

        for (var i = 0; i < length; i++) {
            arr[i] = parseFloat(prompt("arr[" + i + "] = ", 0));
            jsConsole.write(arr[i] + " ");
        }

        jsConsole.writeLine();

        return arr;
    }

    function outputArray(arr) {
        console.log(arr.join(', '));
        jsConsole.writeLine(arr.join(', '));
    }
}());