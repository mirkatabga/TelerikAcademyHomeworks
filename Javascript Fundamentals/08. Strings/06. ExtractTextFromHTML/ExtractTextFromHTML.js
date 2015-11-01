(function () {

    var text = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
    console.log(text);
    extractFromHTML(text);
}());

function extractFromHTML(text) {
    var openingTag = '<',
        closeingTag = '>',
        newText = '';

    for (var i = 0; i < text.length; i++) {
        if (text[i] === openingTag) {
            var j = i;
            while (text[j] !== closeingTag) {
                j++;
            }

            i = j;
        }
        else {
            newText += text[i];
        }
    }

    console.log(newText);
}