var jsConsole;

(function () {

    var btn = document.getElementById("btnCheck");

    btn.onclick = function () {
        var expression = document.getElementById("expression").value,
            result = isBracketsCorrect(expression);
        console.log(result);
        jsConsole.writeLine("is brackets correct: " + result);
    }

}());

function isBracketsCorrect(expression) {
    var openBracket = '(',
        closingBracket = ')',
        openCount = 0,
        closedCount = 0;

    for (var i in expression) {
        if (expression[i] === openBracket) {
            openCount++;
        }
        else if(expression[i] === closingBracket){
            closedCount++;
        }
    }

    if (openCount === closedCount) {
        return true;
    }
    else {
        return false;
    }
}