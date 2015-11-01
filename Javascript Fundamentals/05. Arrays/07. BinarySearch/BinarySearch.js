var jsConsole,
    buttonInput = document.getElementById("input"),
    buttonSearch = document.getElementById("search"),
    arr;



buttonInput.onclick = function () {
    jsConsole.clearConsole();

    var length = document.getElementById("count").value;
    arr = userInputArr(length);

    arr.sort(function (a, b) {
        return a - b;
    })

    jsConsole.writeLine();
    jsConsole.write("sorted array: ");
    outputArray(arr);
    jsConsole.writeLine();
}

buttonSearch.onclick = function () {
    var keyElement = document.getElementById("key");
    var key = parseInt(keyElement.value);

    binarySearch(arr, key);
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

function binarySearch(arr, key) {
    jsConsole.writeLine("binary search");
    console.log(key);

    var r = arr.length - 1,
        l = 0,
        mid = 0,
        len = r - l,
        keyIndex = 0,
        found = false;

    mid = parseInt(len / 2);

    while (r >= l) {
        mid += l;
        if (key === arr[mid]) {
            keyIndex = mid;
            found = true;
            break;
        }
        else if (key > arr[mid]) {
            l = mid;
            len = r - l;
            l++;
            mid = parseInt(len / 2);
        }
        else if (key < arr[mid]) {
            r = mid;
            len = r - l;
            r--;
            mid = parseInt(len / 2);
        }
    }

    if (found) {
        jsConsole.writeLine("The searched number (" + arr[keyIndex] + ") within the array is with index: " + keyIndex);
        console.log("The searched number (" + arr[keyIndex] + ") within the array is with index: " + keyIndex);
    }
    else {
        jsConsole.writeLine("NOT FOUND! The searched number (" + key + ") is missing.");
        console.log("NOT FOUND! The searched number (" + key + ") is missing.");
    }
}