var jsConsole;

(function () {

    var inputButton = document.getElementById("inputButton");
    var compareButton = document.getElementById("compareIndex");

    inputButton.onclick = function () {
        var countOfElements = document.getElementById("countOfElements").value,
            arr = [];

        arr = userInputArr(countOfElements);

        compareButton.onclick = function () {
            var indexToCompare = document.getElementById("indexToCompare").value,
                isBiggerThanTwoNeighbours = false;

            indexToCompare = parseInt(indexToCompare);
            isBiggerThanTwoNeighbours = isElemInArrBiggerThanTwoNeighbours(arr, indexToCompare);

            if (isBiggerThanTwoNeighbours && isBiggerThanTwoNeighbours !== -1) {
                console.log(arr[indexToCompare - 1] + " < " + arr[indexToCompare] + " > " + arr[indexToCompare + 1]);
                jsConsole.writeLine(arr[indexToCompare - 1] + " < " + arr[indexToCompare] + " > " + arr[indexToCompare + 1]);
            }
            else {
                console.log(isBiggerThanTwoNeighbours);
                jsConsole.writeLine(isBiggerThanTwoNeighbours);
            }
        }
    }

    function isElemInArrBiggerThanTwoNeighbours(arr, index) {
        var len = arr.length,
            isBigger = false;

        if (index === 0 || index === len - 1) {
            console.log("There is only one neighbour. Please try again.");
            jsConsole.writeLine("There is only one neighbour. Please try again.");
            return -1;
        }
        else if(index < 0 | index > len - 1) {
            console.log("Invalid index. Please try again.");
            jsConsole.writeLine("Invalid index. Please try again.");
            return -1;
        }
        else {
            if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
                isBigger = true;
            }
        }

        return isBigger;
    }

    function userInputArr(len) {
        var arr = [];

        for (var i = 0; i < len; i++) {
            arr[i] = prompt("Enter arr[" + i + "] element: ", 0);
        }

        console.log(arr.join(", "));
        jsConsole.writeLine("Array: " + arr.join(", "));

        return arr;
    }

}());