var jsConsole;
var button = document.getElementById("check");

button.onclick = function () {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    a = parseFloat(a.value);
    b = parseFloat(b.value);
    c = parseFloat(c.value);

    if (a === 0 || b === 0 || c === 0) {
        console.log(0);
        jsConsole.write(0);
    }
    else if(a > 0 && b > 0 && c > 0){
        console.log("+");
        jsConsole.write("+");
    }
    else if(((a > 0) && (b < 0) && (c < 0)) || ((b > 0) && (a < 0) && (c < 0)) || ((c > 0) && (a < 0) && (b < 0))){
        console.log("+");
        jsConsole.write("+");
    }
    else if (a < 0 && b < 0 && c < 0) {
        console.log("-");
        jsConsole.write("-");
    }
    else if (((a < 0) && (b > 0) && (c > 0)) || ((b < 0) && (a > 0) && (c > 0)) || ((c < 0) && (a > 0) && (b > 0))) {
        console.log("-");
        jsConsole.write("-");
    }

}