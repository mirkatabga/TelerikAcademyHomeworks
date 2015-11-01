function solve(args) {
    function flatten(arr, item) {
        if (Array.isArray(item)) { return arr.concat(item); }
        return arr.concat([item]);
    }

    var min = function (arr) {
        return Math.min.apply(Math, arr);
    }
    var max = function (arr) {
        return Math.max.apply(Math, arr);
    }
    var sum = function (arr) {
        var theSum = 0;
        for (var i = 0; i < arr.length; i++) {
            theSum += arr[i];
        }

        return theSum;
    }
    var average = function (arr) {
        var nSum = sum(arr);
        return parseInt(nSum / arr.length);
    }

    var input = args,
        modified = input.join('*').replace(/def +/g, '').split('*'),
        listy = {},
        keys = [],
        functions = [],
        func,
        values = [];

    input = modified;

    input.forEach(function (line, index) {
        for (var j = 0; j < line.length; j++) {
            if (line[j] === ' ' && index !== input.length - 1) {
                var substr = line.substring(0, j);
                keys.push(substr);
                break;
            }
        }
    })

    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            if (input[i][j] == ' ' && i < input.length - 1) {
                var newStr = '';
                newStr = input[i].substr(j);
                input[i] = '';
                input[i] = newStr.trim();
                break;
            }
        }
    }

    input.forEach(function (line) {
        func = line.split('[')[0];
        if (true) {
            functions.push(func.trim());
        }
    })


    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            if (input[i][j] === '[') {
                var newStr = '';
                newStr = input[i].substring(j).trim();
                input[i] = '';
                input[i] = newStr;
            }
        }
    }

    values = input;
    var lastLine = [functions[functions.length - 1], values[values.length - 1]];
    functions.pop();
    values.pop();

    values.forEach(function (string, index) {
        values[index] = string.replace(/ |\[|\]/g, '').split(',');
    })

    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < values[i].length; j++) {
            if (parseInt(values[i][j])) {
                values[i][j] = parseInt(values[i][j]);
            }
        }
    }

    for (var i = 0; i < values.length; i++) {
        if (functions[i].indexOf('min') > -1) {
            var array = [];
            for (var j = 0; j < values[i].length; j++) {
                if (isFinite(values[i][j])) {
                    array.push(values[i][j]);
                }
                else {
                    values[i][j].trim();
                    array.push(listy[values[i][j]]);
                }

                var flattened = array.reduce(flatten, []);

                listy[keys[i]] = min(flattened);
            }
        }
        else if (functions[i] === '') {
            listy[keys[i]] = values[i];
        }
        else if (functions[i].indexOf('max') > -1) {
            var array = [];
            for (var j = 0; j < values[i].length; j++) {
                if (isFinite(values[i][j])) {
                    array.push(values[i][j]);
                }
                else {
                    values[i][j].trim();
                    array.push(listy[values[i][j]]);
                }

                var flattened = array.reduce(flatten, []);

                listy[keys[i]] = max(flattened);
            }
        }
        else if (functions[i].indexOf('sum') > -1) {
            var array = [];
            for (var j = 0; j < values[i].length; j++) {
                if (isFinite(values[i][j])) {
                    array.push(values[i][j]);
                }
                else {
                    values[i][j].trim();
                    array.push(listy[values[i][j]]);
                }

                var flattened = array.reduce(flatten, []);

                listy[keys[i]] = sum(flattened);
            }
        }
        else if (functions[i].indexOf('avg') > -1) {
            var array = [];
            for (var j = 0; j < values[i].length; j++) {
                if (isFinite(values[i][j])) {
                    array.push(values[i][j]);
                }
                else {
                    values[i][j].trim();
                    array.push(listy[values[i][j]]);
                }

                var flattened = array.reduce(flatten, []);

                listy[keys[i]] = average(flattened);
            }
        }
    }


    console.log(keys);
    console.log(functions);
    console.log(values);
    console.log(args);
    console.log(listy);


    lastLine.forEach(function (str, index) {
        lastLine[index] = str.replace(/ |\[|\]/g, '').split(',');

    })

    console.log(lastLine);

    var flattenedLastLine = lastLine.reduce(flatten, []);

    for (var i = 0; i < flattenedLastLine.length; i++) {
        if (listy.hasOwnProperty() {
            console.log('sum');
        }
    }

    console.log(flattenedLastLine);

}


(function () {
    var test0 = ['def      func      sum[       5,3 ,7,2,                6,         3]', 'def func2 [5, 3, 7, 2, 6, 3]', 'def func3 min[func2]', 'def func4 max[5, 3, 7, 2, 6, 3]', 'def func5 avg[5, 3, 7, 2, 6, 3]', 'def func6 sum[func2, func3, func4 ]', 'sum[func6, func4]'];
    var test1 = ['def func sum[1, 2, 3, -6]', 'def newList [func, 10, 1]', 'def newFunc sum[func, 100, newList]', '[newFunc]'];

    solve(test0);
}());