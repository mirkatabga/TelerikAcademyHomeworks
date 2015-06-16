var jsConsole;

(function () {

    Array.prototype.remove = function (element) {
        while (this.indexOf(element) > -1) {
            this.splice(this.indexOf(element), 1);
        }
    }

    var btnInput = document.getElementById("btnInput"),
        btnRemove = document.getElementById("btnRemove");

    btnInput.onclick = function () {
        var arr = [],
       countOfElements = 0;

        countOfElements = parseInt(document.querySelector("section.input input:first-of-type").value);
        userInputArr(arr, countOfElements);

        btnRemove.onclick = function () {
            var valueToRemove = parseFloat(document.getElementById("numberToRemove").value);
            arr.remove(valueToRemove);
            console.log("Edited Array: ");
            jsConsole.write("Edited Array: ");
            outputArr(arr);
        }

    }

    function userInputArr(arr, len) {
        jsConsole.write("Array: ");
        for (var i = 0; i < len; i++) {
            arr[i] = parseFloat(prompt("Add arr[" + i + "] element:", 0));
            jsConsole.write(arr[i] + " ");
        }
    }

    function outputArr(arr) {
        console.log(arr.join(", "));
        jsConsole.writeLine(arr.join(", "));
    }
}())