var jsConsole;

(function () {
    var lines = [];
    var Point = function (x, y) {
        this.x = x;
        this.y = y;
    };

    var Line = function Line(pointOne, pointTwo) {
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.length = Math.sqrt((Math.pow((pointOne.x - pointTwo.x), 2)) + (Math.pow((pointOne.y - pointTwo.y), 2)));
    };

    var lineOneBtn = document.getElementById("lineOneBtn"),
        lineTwoBtn = document.getElementById("lineTwoBtn"),
        lineThreeBtn = document.getElementById("lineThreeBtn"),
        checkTrianglesBtn = document.getElementById("checkTriangles");

    lineOneBtn.onclick = function () {
        var x = parseFloat(document.querySelector('div#lineOneDiv input:first-of-type').value),
            y = parseFloat(document.querySelector('div#lineOneDiv input:nth-of-type(2)').value),
            pointOneLineOne = new Point(x, y);

        x = parseFloat(document.querySelector('div#lineOneDiv input:nth-of-type(3)').value);
        y = parseFloat(document.querySelector('div#lineOneDiv input:last-of-type').value);
        var pointTwoLineOne = new Point(x, y);

        lineOne = new Line(pointOneLineOne, pointTwoLineOne);
        jsConsole.writeLine("lineOne.length: " + lineOne.length)
        lines.push(lineOne);
        console.log(lines);
    };

    lineTwoBtn.onclick = function () {
        var x = parseFloat(document.querySelector('div#lineTwoDiv input:first-of-type').value),
            y = parseFloat(document.querySelector('div#lineTwoDiv input:nth-of-type(2)').value),
            pointOneLineTwo = new Point(x, y);

        x = parseFloat(document.querySelector('div#lineTwoDiv input:nth-of-type(3)').value);
        y = parseFloat(document.querySelector('div#lineTwoDiv input:last-of-type').value);
        var pointTwoLineTwo = new Point(x, y);

        lineTwo = new Line(pointOneLineTwo, pointTwoLineTwo);
        jsConsole.writeLine("lineOne.length: " + lineTwo.length)
        lines.push(lineTwo);
        console.log(lines);
    };

    lineThreeBtn.onclick = function () {
        var x = parseFloat(document.querySelector('div#lineThreeDiv input:first-of-type').value),
            y = parseFloat(document.querySelector('div#lineThreeDiv input:nth-of-type(2)').value),
            pointOneLineThree = new Point(x, y);

        x = parseFloat(document.querySelector('div#lineOneDiv input:nth-of-type(3)').value);
        y = parseFloat(document.querySelector('div#lineOneDiv input:last-of-type').value);
        var pointTwoLineThree = new Point(x, y);

        lineOne = new Line(pointOneLineThree, pointTwoLineThree);
        jsConsole.writeLine("lineOne.length: " + lineOne.length)
        lines.push(lineOne);
        console.log(lines);
    };

    checkTrianglesBtn.onclick = function () {
        var isPossibleTriangle = canBeTriangle(lines[0], lines[1], lines[2]);
        if (isPossibleTriangle) {
            console.log("This is possible triangle.");
            jsConsole.writeLine("This is possible triangle.");
        }
        else {
            console.log("This is not possible triangle.")
            jsConsole.writeLine("This is not possible triangle.");
        }

        lines = [];
    }

    function canBeTriangle(lineOne, lineTwo, lineThree){
        var lengths = [lineOne.length,lineTwo.length,lineThree.length];
        lengths.sort(function(a,b){
            return a-b;
        });

        if (lengths[0] + lengths[1] > lengths[2]) {
            return true;
        }
        else{
            return false;
        }
    }
}());