function solve(input) {
    var rowsColumnsCount = input[0].split(' ').map(Number),
        rows = rowsColumnsCount[0],
        cols = rowsColumnsCount[1],
        directions = [],
        field = [],
        index = 2,
        counter = 1,
        sum = 0;

    var inputAsStr = input.toString();
    var replaced = inputAsStr.replace(/,/g, ' ');
    var input = replaced.split(' ');

    for (var i = 0; i < rows; i++) {
        counter = Math.pow(2, i);
        directions[i] = [];
        field[i] = [];
        for (var j = 0; j < cols; j++) {
            directions[i][j] = input[index++];
            field[i][j] = counter++;
        }
    }

    for (var i = 0; i < rows;) {
        for (var j = 0; j < cols;) {

            if ((i < 0 || i >= rows) || (j < 0 || j >= cols)) {
                console.log("successed with " + sum);
                return;
            }
            if (field[i][j] === 'X') {
                console.log("failed at (" + i + ', ' + j + ')');
                return;
            }
            else {
                sum += field[i][j];
                field[i][j] = 'X';
            }

            switch (directions[i][j]) {
                case 'dr': {
                    i++
                    j++;
                } break;
                case 'ur': {
                    i--;
                    j++;
                } break;
                case 'ul': {
                    i--;
                    j--;
                } break;
                case 'dl': {
                    i++;
                    j--;
                } break;
                default: console.log('hello');
                    return;
            }


        }
    }
}


(function () {
    args = [
 '3 5',
 'dr dl dl ur ul',
 'dr dr ul ul ur',
 'dl dr ur dl ur'
    ]

    solve(args);
}())