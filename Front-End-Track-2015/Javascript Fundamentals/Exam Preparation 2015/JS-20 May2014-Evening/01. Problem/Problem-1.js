

function solve(params) {
    var args = params.map(Number),
        s = args[0];

    args.shift();
    args.sort(function (a, b) {
        return a - b;
    })

    var cakeOnePrice = args[0],
    cakeTwoPrice = args[1],
    cakeThreePrice = args[2],
    answer = 0,
    maxAmount = 0,
    currAmount = 0;

    for (var c1 = 0; ; c1++) {
        currAmount = 0;
        currAmount = c1 * cakeOnePrice + c2 * cakeTwoPrice + c3 * cakeThreePrice;
        if (currAmount > s) {
            c1 = 0;
            break;
        }
        else if (currAmount > maxAmount) {
            maxAmount = currAmount;
        }
        for (var c2 = 0; ; c2++) {
            currAmount = 0;
            currAmount = c1 * cakeOnePrice + c2 * cakeTwoPrice + c3 * cakeThreePrice;
            if (currAmount > s) {
                c2 = 0;
                break;
            }
            else if (currAmount > maxAmount) {
                maxAmount = currAmount;
            }
            for (var c3 = 0; ; c3++) {
                currAmount = 0;
                currAmount = c1*cakeOnePrice + c2*cakeTwoPrice + c3*cakeThreePrice;
                if (currAmount > s) {
                    c3 = 0;
                    break;
                }
                else if (currAmount > maxAmount) {
                    maxAmount = currAmount;
                }
            }
        }
    }

    console.log(maxAmount);
}(function () {
    input = [
        '110',
    '13',
    '15',
    '17'
    ];

    solve(input);
}());