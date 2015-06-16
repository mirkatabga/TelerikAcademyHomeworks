var jsConsole;
var button = document["getElementById"]("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var sequence = [];
    var min = 0;
    var max = 0;
    var count = document.getElementById("count");
    var input;
    count = count.value;

    jsConsole.write("sequence: ");

    for (var i = 0; i < count; i++) {
        input = prompt("add number[" + i + "]: ", 0);

        if (!(isNaN(input))) {
            sequence[i] = parseFloat(input);
            jsConsole.write(sequence[i] + " ");
        }
        else {
            console.log(NaN);
            jsConsole.writeLine(NaN);
            break;
        }
    }

    jsConsole.writeLine();

    min = sequence[0];
    max = sequence[0];

    for (var index = 1; index < sequence.length; index++) {
        if (sequence[index] > max) {
            max = sequence[index];
        }
        else if (sequence[index] < min) {
            min = sequence[index];
        }
    }

    jsConsole.writeLine("min = " + min);
    jsConsole.writeLine("max = " + max);
}

