var jsConsole;

(function () {
    var button = document.getElementById("check");

    button.onclick = function () {
        jsConsole.clearConsole();
        var number = document.getElementById("number").value,
            theReversedNumber = getReversedNumber(number);

        console.log("Reversed number: " + theReversedNumber);
        jsConsole.write("Reversed number: " + theReversedNumber);
    };

    function getReversedNumber(number) {
        number = parseFloat(number);

        if (!(isNaN(number))) {
            var numberAsString = "",
                len = 0,
                reversedNumberAsString = "",
                reversedNumber = 0;

            //default value and "stringosvane"
            number = parseFloat(number) || 0;
            numberAsString = number.toString();

            len = numberAsString.length;

            for (var i = len - 1, j = 0; i >= 0; i--, j++) {
                reversedNumberAsString += numberAsString[i];
            }

            reversedNumber = parseFloat(reversedNumberAsString);

            return reversedNumber;
        }
        else {
            return "not a number";
        }
    };
})();