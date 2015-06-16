var jsConsole;
var button = document["getElementById"]("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var n = document.getElementById("number");
    n = n.value;

    for (var i = 1; i <= n; i++) {
        if (!(i % 3 === 0 && i % 7 === 0)) {
            console.log(i);
            jsConsole.write(i + " ");
        }
    }
}