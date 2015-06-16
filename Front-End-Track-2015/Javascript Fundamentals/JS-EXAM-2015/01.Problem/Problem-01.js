function solve(args) {
    var input = args;
    var nk = input[0].split(' ').map(Number),
        s = input[1].split(' ').map(Number),
        result,
        n = nk[0],
        k = nk[1];
    var arr = [];

    for (var m = 0; m < k; m++) {
        for (var i = 0; i < n; i++) {
            if (isZero(s[i])) {
                if (i === 0) {
                    arr[i] = Math.abs(s[n - 1] - s[i + 1]);
                }
                else if (i === n - 1) {
                    arr[i] = Math.abs(s[0] - s[n - 2]);
                }
                else {
                    arr[i] = Math.abs(s[i - 1] - s[i + 1]);
                }

            }
            else if (isEven(s[i])) {
                if (i === 0) {
                    arr[i] = maxOfTwo(s[n - 1], s[i + 1]);
                }
                else if (i === n - 1) {
                    arr[i] = maxOfTwo(s[0], s[n - 2])
                }
                else {
                    arr[i] = maxOfTwo(s[i - 1], s[i + 1]);
                }
            }
            else if (isOne(s[i])) {
                if (i === 0) {
                    arr[i] = sumOfTwo(s[n - 1], s[i + 1]);
                }
                else if (i === n - 1) {
                    arr[i] = sumOfTwo(s[0], s[n - 2])
                }
                else {
                    arr[i] = sumOfTwo(s[i - 1], s[i + 1]);
                }
            }
            else if (isOdd(s[i])) {
                if (i === 0) {
                    arr[i] = minOfTwo(s[n - 1], s[i + 1]);
                }
                else if (i === n - 1) {
                    arr[i] = minOfTwo(s[0], s[n - 2])
                }
                else {
                    arr[i] = minOfTwo(s[i - 1], s[i + 1]);
                }
            }
        }
        if (m < k - 1) {
            s = [];
            s = arr;
            arr = [];
        }

    }

    console.log(sumArrNumbers(arr));

    function sumArrNumbers(array) {
        var sum = 0;
        array.forEach(function (n) {
            sum += n;
        })

        return sum;
    }

    function isZero(number) {
        return number === 0;
    }

    function isEven(number) {
        return number % 2 === 0;
    }

    function isOne(number) {
        return number === 1;
    }

    function isOdd(number) {
        return !(number % 2 === 0);
    }

    function maxOfTwo(a, b) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }

    function sumOfTwo(a, b) {
        return a + b;
    }

    function minOfTwo(a,b) {
        if (a < b) {
            return a;
        }
        else {
            return b;
        }
    }
}




(function () {
    var test0 = ['5 1', '9 0 2 4 1'];
    var test1 = ['10 3', '1 9 1 9 1 9 1 9 1 9'];
    var test2 = ['10 10', '0 1 2 3 4 5 6 7 8 9'];

    solve(test1);
}());