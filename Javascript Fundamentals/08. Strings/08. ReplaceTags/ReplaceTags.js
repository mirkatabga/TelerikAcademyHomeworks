(function () {

    var textHTML = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'

    console.log(textHTML);
    replaceAnchor(textHTML);
}());

function replaceAnchor(textHTML){
    for (var i = 0; i < textHTML.length; i++) {
        if (textHTML[i] === '<' && textHTML[i+1] === 'a') {
            var newStr = '';
            newStr = textHTML.replace('<a href="', '[url=');
            textHTML = '';
            textHTML += newStr;
        }
        else if (textHTML[i] === '>' && textHTML[i-1] === '"') {
            var newStr = '';
            newStr = textHTML.replace('">', '"]');
            textHTML = '';
            textHTML += newStr;
        }
        else if (textHTML[i] === '/' && textHTML[i+1] === 'a') {
            var newStr = '';
            newStr = textHTML.replace('</a>', '[/URL]');
            textHTML = '';
            textHTML += newStr;
        }
    }

    console.log(textHTML);
}