function Solve(args) {
    var input = args,
        N = parseInt(input[0]),
        currSum = 0,
        maxSum = -Infinity;

    input.shift();
    input = input.map(Number);

    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            currSum += input[j];
            if (currSum > maxSum) {
                maxSum = currSum;
            }
        }
        currSum = 0;
    }

    console.log(maxSum);
}


(function () {
    var test1 = [
       '9',
       '-9',
       '-8',
       '-8',
       '-7',
       '-6',
       '-5',
       '-1',
       '-7',
       '-6',
    ];

    Solve(test1);
}());

