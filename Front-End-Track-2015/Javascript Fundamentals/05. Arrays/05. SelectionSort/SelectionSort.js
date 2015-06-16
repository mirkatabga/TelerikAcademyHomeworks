var jsConsole,
    button = document.getElementById("check");

button.onclick = function () {
    jsConsole.clearConsole();

    var length = document.getElementById("count").value;
    var arr = userInputArr(length);
    var sortedArr = [];

    sortedArr = selectionSort(arr);

    jsConsole.writeLine();
    jsConsole.write("sorted: ");
    outputArray(sortedArr);
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

function selectionSort(arr) {
    /*with one array*/
    var min = 0;
    var minIndex = 0;

    for (var i = 0; i < arr.length - 1; i++) {
        min = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
        }
        if (min !== arr[i]) {
            arr[minIndex] = arr[i];
            arr[i] = min;
        }
    }

    return arr;

    ///*with two arrays*/
    //var sortedArr = [];
    //var count = 0;
    //var min = arr[0];
    //var minIndex = 0;
    //var minIndexNotChanched = true;

    //while (count < arr.length) {
    //    minIndexNotChanched = true;

    //    for (i in arr) {
    //        if (arr[i] !== false || arr[i] === 0) {
    //            if (min > arr[i] || min === false) {
    //                min = arr[i];
    //                minIndex = i;
    //                minIndexNotChanched = false;
    //            }
    //        }
    //    }

    //    if (minIndexNotChanched) {
    //        minIndex = 0;
    //    }

    //    sortedArr.push(min);
    //    arr[minIndex] = false;
    //    min = arr[0];
    //    count++;
    //}

    //return sortedArr;
}


