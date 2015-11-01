var jsConsole;

(function () {

    var inputButton = document.getElementById("inputButton");
    var compareButton = document.getElementById("compareIndex");

    inputButton.onclick = function () {
        jsConsole.clearConsole();

        var countOfElements = document.getElementById("countOfElements").value,
            arr = [],
            firstBiggerIndex = -1;

        arr = userInputArr(countOfElements);

        for (var i = 1; i < arr.length - 1; i++) {
            firstBiggerIndex = firstIndexLargerThanNeighbours(arr, i);
            if (firstBiggerIndex && firstBiggerIndex != -1) {
                break;
            }
        }
        
        console.log("Index: " + firstBiggerIndex);
        jsConsole.writeLine("Index: " + firstBiggerIndex);

        console.log("Element: " + arr[firstBiggerIndex]);
        jsConsole.writeLine("Element: " + arr[firstBiggerIndex]);
    }

    function firstIndexLargerThanNeighbours(arr, index) {
        var len = arr.length,
            indexBigger = -1;

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
                indexBigger = index;
            }
        }

        return indexBigger;
    }

    function userInputArr(len) {
        var arr = [];

        for (var i = 0; i < len; i++) {
            arr[i] = parseFloat(prompt("Enter arr[" + i + "] element: ", 0));
        }

        console.log(arr.join(", "));
        jsConsole.writeLine("Array: " + arr.join(", "));

        return arr;
    }

}());