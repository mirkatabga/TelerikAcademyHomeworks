var jsConsole;

(function () {

    var text = " We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."
    var substring = "in";
    var count = getCountOfSubstring(substring, text);

    jsConsole.writeLine("TEXT: " + text + '\n\n');
    jsConsole.writeLine("Substring: " + substring) + '\n\n';
    jsConsole.writeLine("Count: " + count);

}());

function getCountOfSubstring(substring, text) {
    var length = substring.length,
        toLowerText = text.toLowerCase(),
        count = 0;

    toLowerText = toLowerText.trim();

    for (var i = 0; i < toLowerText.length; i++) {
        if (toLowerText[i] === substring[0]) {
            var substringFromText = toLowerText.substr(i, length);
            if (substringFromText === substring) {
                count++;
            }
        }
    }

    return count;
}