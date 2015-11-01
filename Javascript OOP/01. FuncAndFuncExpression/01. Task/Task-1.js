/*

Task 1.

Write a function that sums an array of numbers:
Numbers must be always of type Number
Returns null if the array is empty
Throws Error if the parameter is not passed (undefined)
Throws if any of the elements is not convertible to Number

*/

function solve() {
    return function sumElementsInArray (array) {
        var i,
            len,
            sum = 0;


            if (sumElementsInArray.arguments.length === 0) {
                throw undefined;
            }

            if (array.length === 0) {
                return null;
            }

            else {
                var areDigits = array.every(function (item) {
                    return !isNaN(item);
                })

                if (areDigits) {
                    return array.reduce(function (a,b) {
                        return parseInt(a) + parseInt(b);
                    })
                }
                else {
                    throw 'error';
                }
            }
    }
}

(function(){
    var func = solve();
    var test1 = [1, 2, 3];
    var test3 = ['asass', 1, 2, 3];

    //test1
    func(test1);
    //test2
    func();
    //test3;
    func(test3);
}());
