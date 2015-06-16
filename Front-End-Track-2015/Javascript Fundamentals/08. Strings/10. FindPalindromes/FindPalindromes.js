(function () {

    var text = 'ALABALA Write a program that extracts from a given txt all palindromes, e.g. "ABBA", "lamal", "exe".'
    console.log(text);
    var words = splitToWords(text);
    findPolindromes(words);
}());

function splitToWords(text) {
    var newText = text.replace(/\.|,|"/g, '');
    text = '';
    text = newText;
    var words = text.split(' ');
    return words;
}

function findPolindromes(words) {
    var isSame = false,
        polindromes = [];

    for (var i in words) {
        var len = words[i].length,
            mid = Math.floor(len / 2),
            word = words[i];

        if (len % 2 === 0) {
            var l = mid - 1,
                r = mid;

            while (l >= 0 && r < len) {
                if (word[l] === word[r]) {
                    isSame = true;
                }
                else {
                    isSame = false;
                    break;
                }

                l--;
                r++;
            }
        }
        else {
            var l = mid - 1,
                r = mid + 1;

            while (l >= 0 && r < len) {
                if (word[l] === word[r]) {
                    isSame = true;
                }
                else {
                    isSame = false;
                    break;
                }

                l--;
                r++;
            }
        }


        if (isSame) {
            polindromes.push(words[i]);
        }
    }

    console.log(polindromes);
}