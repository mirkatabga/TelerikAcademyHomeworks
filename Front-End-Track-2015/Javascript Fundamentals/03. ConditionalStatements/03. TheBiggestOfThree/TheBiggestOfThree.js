var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    a = parseFloat(a.value);
    b = parseFloat(b.value);
    c = parseFloat(c.value);


    /*The count of all permotations on 3 elements is 3! = 3 * 2 = 6 (6 possible arrangements)
     * 1 , 2 , 3
     * 1 , 3 , 2
     * 2 , 1 , 3
     * 2 , 3 , 1
     * 3 , 1 , 2
     * 3 , 2 , 1
      */
    if (a >= b) {
        if (b >= c) {
            //3,2,1
            console.log(a);
            jsConsole.write(a);
        }
        else {
            if (a > c) {
                //3,1,2
                console.log(a);
                jsConsole.write(a);
            }
            else {
                //2,1,3
                console.log(c);
                jsConsole.write(c);
            }
        }
    }
    else {
        if (b >= c) {
            //1,3,2
            //2,3,1
            console.log(b);
            jsConsole.write(b);
        }
        else {
            //1,2,3
            console.log(c);
            jsConsole.write(c);
        }
    }
}