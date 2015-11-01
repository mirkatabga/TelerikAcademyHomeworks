var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var e = document.getElementById("e");

    a = parseFloat(a.value);
    b = parseFloat(b.value);
    c = parseFloat(c.value);
    d = parseFloat(d.value);
    e = parseFloat(e.value);

    var biggestOfFirstThree = theBiggestOfThreeNumbers(a, b, c);
    var biggestOfAll = theBiggestOfThreeNumbers(biggestOfFirstThree, d, e);

    console.log(biggestOfAll);
    jsConsole.write(biggestOfAll);
}

function theBiggestOfThreeNumbers(a, b, c) {
    /*The count of all permotations on 3 elements is 3! = 3 * 2 = 6 (6 possible arrangements)
 * 1 , 2 , 3
 * 1 , 3 , 2
 * 2 , 1 , 3
 * 2 , 3 , 1
 * 3 , 1 , 2
 * 3 , 2 , 1
  */
    var biggest = 0;

    if (a >= b) {
        if (b >= c) {
            //3,2,1
            biggest = a;

        }
        else {
            if (a > c) {
                //3,1,2
                biggest = a;
            }
            else {
                //2,1,3
                biggest = c;
            }
        }
    }
    else {
        if (b >= c) {
            //1,3,2
            //2,3,1
            biggest = b;
        }
        else {
            //1,2,3
            biggest = c;
        }
    }

    return biggest;
}