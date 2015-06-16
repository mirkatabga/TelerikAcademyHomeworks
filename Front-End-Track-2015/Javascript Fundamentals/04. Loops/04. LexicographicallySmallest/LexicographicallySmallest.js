var jsConsole;

var doc = document;
jsConsole.writeLine(doc);
lexicographicallyFirstLast(doc);
jsConsole.writeLine();

var win = window;
jsConsole.writeLine(win);
lexicographicallyFirstLast(win);
jsConsole.writeLine();

var nav = navigator;
jsConsole.writeLine(nav);
lexicographicallyFirstLast(nav);
jsConsole.writeLine();

function lexicographicallyFirstLast(obj) {
    var smallest = "z";
    var largest = "a";

    for (property in obj) {
        if (property > largest) {
            largest = property;
        }
        else if (property < smallest) {
            smallest = property;
        }
    }

    console.log("Lexicographically smallest " + smallest);
    jsConsole.writeLine("Lexicographically smallest " + smallest);
    console.log("Lexicographically largest " + largest);
    jsConsole.writeLine("Lexicographically largest " + largest);
}


