var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var point = new Point(document.getElementById("pointX").value, document.getElementById("pointY").value);
    var radius = 5;

    isPointInCircle(radius, point);
}

function Point(x, y) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
};


function isPointInCircle(radius, point) {
    if ((point.x * point.x) + (point.y * point.y) <= radius * radius) {
        console.log(true);
        jsConsole.write("Is point within circle: " + true);
    }
    else {
        console.log(false);
        jsConsole.write("Is point within circle: " + false);
    }
}

