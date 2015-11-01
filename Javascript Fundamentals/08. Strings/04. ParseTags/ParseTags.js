var jsConsole;

String.prototype.toMixCase = function () {
    var thisStr = '';
    thisStr += this;

    var newStr = '',
        char = '',
        randomNum = 0;

    for (var i = 0; i < thisStr.length; i++) {
        randomNum = getRandomInt(0, thisStr.length);
        char = '';
        newStr = '';

        if (randomNum > thisStr.length / 2) {
            char += thisStr[i].toUpperCase();
        }
        else {
            char += thisStr[i].toLowerCase();
        }

        newStr += thisStr.substring(0, i - 1);
        newStr += char;
        if (i === thisStr.length - 1) {
            newStr += thisStr.substring(i, thisStr.length - 1);
        }
        else {
            newStr += thisStr.substring(i, thisStr.length);
        }

        thisStr = '';
        thisStr += newStr;
    }

    return thisStr;
};

(function () {

    var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine<lowcase>\(OH YEAH!\)</lowcase></upcase>. We <mixcase>don't</mixcase> have <lowcase>aNytHing</lowcase> else.";
    console.log(text);

    jsConsole.write("Problem 4. Parse tags: result is in the browser console")
    parseTag(text);

}());

function parseTag(text) {
    var openTag = '<',
        closingTag = '>',
        openClosingTag = '</',
        upcase = "upcase",
        lowcase = "lowcase",
        mixcase = "mixcase";

    for (var i = 0, len = text.length; i < len; i++) {

        if (text[i] === openTag && (text[i] + text[i + 1]) !== openClosingTag) {
            var j = i + 1,
                substring = '';
            while (text[j] !== closingTag) {
                substring += text[j];
                j++;
            }

            ++j;
            if (substring === upcase) {
                substring = '';
                while (text[j] !== openTag) {
                    substring += text[j];
                    j++;
                }

                substring = substring.toUpperCase();
                var newText = '';
                newText = text.substr(0, i);
                newText += substring;
                newText += text.substr(j);
                text = '';
                text += newText;
                i += substring.length - 3;
            }
            else if (substring === lowcase) {
                substring = '';
                while (text[j] !== openTag) {
                    substring += text[j];
                    j++;
                }

                substring = substring.toLowerCase();
                var newText = '';
                newText = text.substr(0, i);
                newText += substring;
                newText += text.substr(j);
                text = '';
                text += newText;
                i += substring.length - 3;
            }
            else if (substring === mixcase) {
                substring = '';
                while (text[j] !== openTag) {
                    substring += text[j];
                    j++;
                }

                substring = substring.toMixCase();
                var newText = '';
                newText = text.substr(0, i);
                newText += substring;
                newText += text.substr(j);
                text = '';
                text += newText;
                i += substring.length - 3;
            }
        }
        else if ((text[i] + text[i + 1]) === openClosingTag) {
            var j = i;
            while (text[j] !== closingTag) {
                j++
            }

            var newString = '';
            newString += text.substr(0, i);
            newString += text.substr(j + 1, text.length);
            text = '';
            text += newString;
            i -= 3;
        }
    }

    console.log(text);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

