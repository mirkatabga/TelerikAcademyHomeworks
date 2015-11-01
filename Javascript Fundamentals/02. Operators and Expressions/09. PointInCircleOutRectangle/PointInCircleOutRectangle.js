var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();
    var p = new Point(document.getElementById("pointX").value, document.getElementById("pointY").value);
    var c = new Point(1, 1);
    var radius = 3;

    if (isPointInCircle(radius, c, p)) {
        if (isPointOutsideOfRectangle(p)) {
            console.log("The point (" + p.x + "," + p.y + ") is in the circle K( (1,1), 3) and outside of the rectangle R(top=1, left=-1, width=6, height=2)");
            jsConsole.writeLine(true);
            jsConsole.writeLine("The point (" + p.x + "," + p.y + ") is in the circle K( (1,1), 3) and outside of the rectangle R(top=1, left=-1, width=6, height=2)");
        }
        else {
            console.log("The point (" + p.x + "," + p.y + ") is in the circle K( (1,1), 3) but inside of the rectangle R(top=1, left=-1, width=6, height=2)");
            jsConsole.writeLine(false);
            jsConsole.writeLine("The point (" + p.x + "," + p.y + ") is in the circle K( (1,1), 3) but inside of the rectangle R(top=1, left=-1, width=6, height=2)");
        }
    }
    else {
        console.log("The point (" + p.x + "," + p.y + ") is not in the circle K( (1,1), 3)");
        jsConsole.writeLine(false);
        jsConsole.writeLine("The point (" + p.x + "," + p.y + ") is not in the circle K( (1,1), 3)");
    }
}

function Point(x, y) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
};


function isPointInCircle(radius, c, p) {
    var distance = Math.sqrt(((p.x - c.x) * (p.x - c.x)) + ((p.y - c.y) * (p.y - c.y)));
    if (distance <= radius) {
        return true;
    }
    else {
        return false;
    }
}

function isPointOutsideOfRectangle(p) {
    if (((p.x < -1) || (p.x > 5)) || ((p.y > 1) || (p.y < -1))) {
        return true;
    }
    else {
        return false;
    }
}

