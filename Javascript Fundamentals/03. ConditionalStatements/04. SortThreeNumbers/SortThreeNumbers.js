var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var biggest = 0;
    var bigger = 0;
    var smallest = 0;

    a = parseFloat(a.value);
    b = parseFloat(b.value);
    c = parseFloat(c.value);

    biggest = theBiggestOfThreeNumbers(a, b, c);

    if (biggest === a) {
        if (b >= c) {
            bigger = b;
            smallest = c;
        }
        else {
            bigger = c;
            smallest = b;
        }
    }
    else if (biggest === b) {
        if (a >= c) {
            bigger = a;
            smallest = c;
        }
        else {
            bigger = c;
            smallest = a;
        }
    }
    else {
        if (a >= b) {
            bigger = a;
            smallest = b;
        }
        else {
            bigger = b;
            smallest = a;
        }
    }

    console.log(biggest + " " + bigger + " " + smallest);
    jsConsole.write(biggest + " " + bigger + " " + smallest);
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