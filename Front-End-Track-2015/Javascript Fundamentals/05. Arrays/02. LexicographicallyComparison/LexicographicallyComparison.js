var jsConsole;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var reversedAlphabet = [];
var length = 0;

//reversedAlphabet = reversedAlphabet.concat(alphabet);
//reversedAlphabet.reverse();


for (var i = alphabet.length - 1 , j = 0; i >= 0; i--, j++) {
    reversedAlphabet[j] = alphabet[i];
}

if (alphabet.length < reversedAlphabet.length) {
    length = alphabet.length;
}
else {
    length = reversedAlphabet.length;
}

for (var i = 0; i < length; i++) {
    if (alphabet[i] > reversedAlphabet[i]) {
        console.log("alphabet [" + i + "] '" + alphabet[i] + "' is bigger lexicographically then reversedAlphabet[" + i + "] '" + reversedAlphabet[i] + "'");
        jsConsole.writeLine("alphabet [" + i + "] '" + alphabet[i] + "' is bigger lexicographically then reversedAlphabet[" + i + "] '" + reversedAlphabet[i] + "'");
    }
    else {
        console.log("alphabet [" + i + "] '" + alphabet[i] + "' is smaller lexicographically then reversedAlphabet[" + i + "] '" + reversedAlphabet[i] + "'");
        jsConsole.writeLine("alphabet [" + i + "] '" + alphabet[i] + "' is smaller lexicographically then reversedAlphabet[" + i + "] '" + reversedAlphabet[i] + "'");
    }
}