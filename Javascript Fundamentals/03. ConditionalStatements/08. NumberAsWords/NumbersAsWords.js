var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var numElement = document.getElementById("number");
    if (!isNaN(numElement.value)) {
        var number = parseInt(numElement.value);

        if (number < 0) {
            console.log("the number should be in the interval [ 0 ; 999 ]");
            jsConsole.write("the number should be in the interval [ 0 ; 999 ]");
        }
        else {
            var result = "";

            result = numberToWords(number);
            console.log(result);
            jsConsole.write(result);
        }
    }
    else {
        console.log(NaN);
        jsConsole.write(NaN);
    }
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

function twoDigitNumberToWord(number) {
    var twoDigitNumberAsWord = "";

    if (number < 20) {
        switch (number) {
            case 10: twoDigitNumberAsWord = "ten";
                break;
            case 11: twoDigitNumberAsWord = "eleven";
                break;
            case 12: twoDigitNumberAsWord = "twelve";
                break;
            case 13: twoDigitNumberAsWord = "thirteen";
                break;
            case 14: twoDigitNumberAsWord = "fourteen";
                break;
            case 15: twoDigitNumberAsWord = "fifteen";
                break;
            case 16: twoDigitNumberAsWord = "sixteen";
                break;
            case 17: twoDigitNumberAsWord = "seventeen";
                break;
            case 18: twoDigitNumberAsWord = "eighteen";
                break;
            case 19: twoDigitNumberAsWord = "nineteen";
                break;
            default:
                console.log("not a number");
                jsConsole.write("not a number");
        }
    }
        //else if (parseInt(number % 10) === 0) {
        //    switch (number) {
        //        case 20: twoDigitNumberAsWord = "twenty";
        //            break;
        //        case 30: twoDigitNumberAsWord = "thirty";
        //            break;
        //        case 40: twoDigitNumberAsWord = "forty";
        //            break;
        //        case 50: twoDigitNumberAsWord = "fifty";
        //            break;
        //        case 60: twoDigitNumberAsWord = "sixty";
        //            break;
        //        case 70: twoDigitNumberAsWord = "seventy";
        //            break;
        //        case 80: twoDigitNumberAsWord = "eighty";
        //            break;
        //        case 90: twoDigitNumberAsWord = "ninety";
        //            break;
        //        default:
        //            console.log("not a number");
        //            jsConsole.write("not a number");
        //    }
        //}
    else {
        var rightestDigit = 0;
        var secondDigit = 0;
        var itr = 0;

        while (number != 0) {
            itr++;

            var digit = number % 10;
            number = parseInt(number / 10);

            if (itr === 1) {
                rightestDigit = digit;
            }
            else if (itr === 2) {
                secondDigit = digit;
            }
        }

        switch (secondDigit) {
            case 2: twoDigitNumberAsWord = "twenty";
                break;
            case 3: twoDigitNumberAsWord = "thirty";
                break;
            case 4: twoDigitNumberAsWord = "forty";
                break;
            case 5: twoDigitNumberAsWord = "fifty";
                break;
            case 6: twoDigitNumberAsWord = "sixty";
                break;
            case 7: twoDigitNumberAsWord = "seventy";
                break;
            case 8: twoDigitNumberAsWord = "eighty";
                break;
            case 9: twoDigitNumberAsWord = "ninety";
                break;
            default:
                console.log("not a number");
                jsConsole.write("not a number");
        }

        if (rightestDigit !== 0) {
            twoDigitNumberAsWord = twoDigitNumberAsWord + " " + oneDigitNumberToWord(rightestDigit);
        }
    }

    return twoDigitNumberAsWord;
}

function threeDigitNumberToWord(number) {
    var threeDigitNumberAsWord = "";
    var rightestDigit = 0;
    var secondDigit = 0;
    var thirdDigit = 0;
    var itr = 0;

    while (number != 0) {
        itr++;
        var digit = number % 10;
        number = parseInt(number / 10);

        if (itr === 1) {
            rightestDigit = digit;
        }
        else if (itr === 2) {
            secondDigit = digit;
        }
        else if (itr === 3) {
            thirdDigit = digit;
        }
        else {
            throw Error("if this appearce, I should rewrite the code, but it won't");
        }
    }

    threeDigitNumberAsWord = oneDigitNumberToWord(thirdDigit) + " hundred";

    if (secondDigit !== 0) {
        var twoDigitNum = secondDigit.toString() + rightestDigit.toString();
        twoDigitNum = parseInt(twoDigitNum);
        threeDigitNumberAsWord = threeDigitNumberAsWord + " and " + twoDigitNumberToWord(twoDigitNum);
    }
    else if (rightestDigit !== 0) {
        threeDigitNumberAsWord = threeDigitNumberAsWord + " and " + oneDigitNumberToWord(rightestDigit);
    }

    return threeDigitNumberAsWord;
}

function countOfDigits(number) {
    var count = 0;
    if (number === 0) {
        count = 1;
    }
    else {
        while (number != 0) {
            number /= 10;
            number = parseInt(number);
            count++;
        }
    }

    return count;
}

function firstLetterToUpper(string) {
    var strFirstLetterToUpp = string.substr(0, 1).toUpperCase() + string.substr(1);
    return strFirstLetterToUpp;
}

function numberToWords(number) {
    var numberAsWord = "";
    var count = 0;
    count = countOfDigits(number);

    if (count === 1) {
        numberAsWord = oneDigitNumberToWord(number);
    }
    else if (count === 2) {
        numberAsWord = twoDigitNumberToWord(number);
    }
    else if (count === 3) {
        numberAsWord = threeDigitNumberToWord(number);
    }
    else {
        console.log("this is not number in the interval [ 0 ; 999 ]");
        jsConsole.write("this is not number in the interval [ 0 ; 999 ]");
    }

    numberAsWord = firstLetterToUpper(numberAsWord);
    return numberAsWord;
}