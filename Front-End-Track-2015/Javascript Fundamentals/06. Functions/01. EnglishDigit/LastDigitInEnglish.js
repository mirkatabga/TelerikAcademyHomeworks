var jsConsole;

(function () {
    var button = document.getElementById("check");

    button.onclick = function () {
        jsConsole.clearConsole();
        var number = document.getElementById("number").value,
            theLastDigitAsEnglishWord = getLastDigitAsEnglishWord(number);

        console.log("Last digit as word: " + theLastDigitAsEnglishWord);
        jsConsole.write("Last digit as word: " + theLastDigitAsEnglishWord);


    };

    function getLastDigitAsEnglishWord(number) {
        number = parseFloat(number);

        if (!(isNaN(number))) {
            var digit = 0,
                digitAsString = "";
                digitAsWord = "not a number",
                len = 0;

            //default value
            number = number || 0;
            numberAsString = number.toString();
            len = numberAsString.length;

            //separates the last symbol and parses it as digit
            digitAsString = numberAsString.slice(len - 1);
            digit = parseInt(digitAsString);

            switch (digit) {
                case 0: {
                    digitAsWord = "zero";
                    break;
                }
                case 1: {
                    digitAsWord = "one";
                } break;
                case 2: {
                    digitAsWord = "two";
                } break;
                case 3: {
                    digitAsWord = "three";
                } break;
                case 4: {
                    digitAsWord = "four";
                } break;
                case 5: {
                    digitAsWord = "five";
                } break;
                case 6: {
                    digitAsWord = "six";
                } break;
                case 8: {
                    digitAsWord = "eight";
                } break;
                case 9: {
                    digitAsWord = "nine";
                } break;
                default: digitAsWord = "not a digit";
                    break;       
            }
            return digitAsWord;
        }
        else {
            return "not a number";
        }

    }
})();