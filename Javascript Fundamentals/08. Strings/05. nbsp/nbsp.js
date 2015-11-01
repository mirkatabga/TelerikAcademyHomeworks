var jsConsole;

(function () {

    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    jsConsole.write("Result in the browser console");
    replaceBlankSpacesWithNbsp(text);
}());

function replaceBlankSpacesWithNbsp(text) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            var newText = '';
            newText = text.substr(0, i);
            newText += '&nbsp';
            newText += text.substr(i + 1, text.length);
            text = '';
            text = newText;
        }
    }

    console.log(text);
};