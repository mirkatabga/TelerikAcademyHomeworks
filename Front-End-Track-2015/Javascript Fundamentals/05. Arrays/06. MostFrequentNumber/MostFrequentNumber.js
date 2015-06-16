var jsConsole,
    button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var length = document.getElementById("count").value;
    var arr = userInputArr(length);

    jsConsole.writeLine();

    result = mostFrequentNumber(arr);
}

function userInputArr(length) {
    var arr = [];

    jsConsole.write("array: ");

    for (var i = 0; i < length; i++) {
        arr[i] = parseFloat(prompt("arr[" + i + "] = ", 0));
        jsConsole.write(arr[i] + " ");
    }

    return arr;
}

function mostFrequentNumber(arr) {
    var currCount = 0;
    var currNumber = 0;
    var maxCount = 1;
    var maxNumber = 0;

    for (index in arr) {
        if (arr[index] !== false || arr[index] === 0) {
            currNumber = arr[index];
            for (var j = index; j < arr.length; j++) {
                if (arr[j] !== false || arr[j] === 0) {
                    if (currNumber === arr[j]) {
                        currCount++;
                        arr[j] = false;
                    }
                }
            }
            if (currCount > maxCount) {
                maxCount = currCount;
                maxNumber = currNumber;
            }

            currCount = 0;
        }
    }

    jsConsole.write(maxNumber + " (" + maxCount + " times)");
}