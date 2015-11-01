var jsConsole,
    button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var length = document.getElementById("count").value;
    var arr = userInputArr(length);
    var subArr = [];

    subArr = maxIncreasingSequenceInArr(arr);

    jsConsole.writeLine();
    jsConsole.write("max sequence: ");
    outputArray(subArr);
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

function outputArray(arr) {
    console.log(arr.join(', '));
    jsConsole.writeLine(arr.join(', '));
}

function maxIncreasingSequenceInArr(arr) {
    var startIndex = 0,
        currCount = 1,
        maxCount = 1,
        maxIndex = 0;

    for (var index = 1; index < arr.length; index++) {
        if ((arr[index] - 1) === arr[index - 1]) {
            currCount++;
            if (currCount > maxCount) {
                maxCount = currCount;
                maxIndex = startIndex;
            }
        }
        else {
            startIndex = index;
            currCount = 1;
        }
    }

    var subArr = [];
    index = 0;

    for (index = maxIndex, i = 0; index < maxIndex + maxCount; index++, i++) {
        subArr[i] = arr[index];
    }

    return subArr;
}


