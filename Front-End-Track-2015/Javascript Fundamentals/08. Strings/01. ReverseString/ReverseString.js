var jsConsole;

(function () {

    var btn = document.getElementById("btnInput");

    btn.onclick = function () {
        var str = (document.getElementById("string").value);

        jsConsole.writeLine("normal string: " + str);
        console.log(str);
        str = str.reverse();

        jsConsole.writeLine("reversed string: " + str);
        console.log(str);
    }

    String.prototype.reverse = function () {
        var reversed = "";

        for (var i = (this.length - 1) ; i >= 0; i--) {
            reversed += this[i];
        }
        return reversed;
    }
}());