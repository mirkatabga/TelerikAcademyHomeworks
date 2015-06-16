var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var width = getWidth();
    var height = getHeight();

    var area = FindRectangleArea(width, height);
    console.log("area:" + area);
    jsConsole.write("area:" + area);
};

var getWidth = function () {
    var width = document.getElementById("width").value;
    return width;
}

var getHeight = function () {
    var height = document.getElementById("height").value;
    return height;
}

function FindRectangleArea(width, height) {
    var area = width * height;
    return area;
};