/*
Task 2.

Write a function that finds all the prime numbers in a range
It should return the prime numbers in an array
It must throw an Error if any of the range params is not convertible to Number
It must throw an Error if any of the range params is missing

*/


function solve() {
    return function findPrimesInRange(start, end) {

        var primes = [],
            numbers = [],
            i,
            isPrime = true,
            len;

        if (findPrimesInRange.arguments.length !== 2) {
            throw 'Error! findPrimesInRange takes two arguments';
        }

        var isConvertible = true;

        for (i = 0; i < arguments.length; i++) {
            if (isNaN(arguments[i])) {
                isConvertible = false;
            }

        }

        if (isConvertible){
            for (i = start; i <= end; i++) {
                numbers.push(i);
            }

            for (i = 0, len = numbers.length; i < len; i++) {
                isPrime = true;
                if (numbers[i] > 2) {
                    for (var j = 2; j <= Math.sqrt(numbers[i]) ; j++) {
                        if (!(numbers[i] % j)) {
                            isPrime = false;
                            break;
                        }
                    }

                    if (isPrime) {
                        primes.push(numbers[i]);
                    }
                }
                else if (numbers[i] === 2) {
                    primes.push(numbers[i]);
                }
                
            }

            return primes;
        }
        else {
            throw 'Error! findPrimesInRange arguments must be Numbers';
        }
    }
}

(function () {

    var func = solve();
    func(1, 5);
}());