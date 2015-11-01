function solve(input) {
    var rowsAndCols = input[0].split(" ").map(Number),
        rows = rowsAndCols[0],
        cols = rowsAndCols[1],
        field = [],
        jumps = 0,
        sum = 0;

    input.shift();

    for (var row = 0; row < rows; row++) {
        field[row] = [];
        var counter = Math.pow(2, row);
        for (var col = 0; col < cols; col++) {
            field[row][col] = counter;
            counter--;
        }
    }

    row = rows - 1;
    col = cols - 1;

    while (true) {
        if ((row < 0 || row >= rows) || (col < 0 || col >= cols)) {
            console.log("Go go Horsy! Collected " + sum + " weeds");
            break;
        }

        var step = field[row][col];

        if (step === 'X') {
            console.log("Sadly the horse is doomed in " + jumps + " jumps");
            break;
        }

        sum += field[row][col];
        jumps++;
        field[row][col] = 'X';

        switch (input[row][col]) {
            case '1': row -= 2; col += 1; break;
            case '2': row -= 1; col += 2; break;
            case '3': row += 1; col += 2; break;
            case '4': row += 2; col += 1; break;
            case '5': row += 2; col -= 1; break;
            case '6': row += 1; col -= 2; break;
            case '7': row -= 1; col -= 2; break;
            case '8': row -= 2; col -= 1; break;
        }
    }
}

(function () {
    args = [
 '3 5',
 '54361',
 '43326',
 '52188',
    ];

    solve(args);
}());