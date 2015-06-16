var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var numElement = document.getElementById("number");
    var number = parseInt(numElement.value);

    var digitAsWord = oneDigitNumberToWord(number);
    console.log(digitAsWord);
    jsConsole.write(digitAsWord);

}

function oneDigitNumberToWord(number) {
    var digitAsWord = "";
    switch (number) {
        case 0: digitAsWord = "zero";
            break;
        case 1: digitAsWord = "one";
            break;
        case 2: digitAsWord = "two";
            break;
        case 3: digitAsWord = "three";
            break;
        case 4: digitAsWord = "four";
            break;
        case 5: digitAsWord = "five";
            break;
        case 6: digitAsWord = "six";
            break;
        case 7: digitAsWord = "seven";
            break;
        case 8: digitAsWord = "eight";
            break;
        case 9: digitAsWord = "nine";
            break;
        default:
            digitAsWord = "not a digit";
    }

    return digitAsWord;
}