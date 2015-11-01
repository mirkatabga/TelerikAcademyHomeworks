function solve(args) {
    var input = args,
        sizes = input[0].split(' ').map(Number),
        rows = sizes[0],
        cols = sizes[1],
        startPositions = input[1].split(' ').map(Number),
        row = startPositions[0],
        col = startPositions[1],
        field = [],
        counter = 0,
        sum = 0,
        passed = 0;

    input.shift();
    input.shift();

    for (var i = 0; i < rows; i++) {
        field[i] = [];
        for (var j = 0; j < cols; j++) {
            counter++;
            field[i][j] = counter;
        }
    }

    while (true) {
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            console.log('out ' + sum);
            break;
        }
        else if (field[row][col] === 'X') {
            console.log('lost ' + passed);
            break;
        }
        else {
            sum += field[row][col]
            passed++;
            field[row][col] = 'X';

            switch (input[row][col]) {
                case 'l': col--; break;
                case 'r': col++; break;
                case 'u': row--; break;
                case 'd': row++; break;
            }
        }
    }
}


(function () {
    var test1 = ["3 4", "1 3", "lrrd", "dlll", "rddd"]; // out 45;
    var test2 = ["5 8", "0 0", "rrrrrrrd", "rludulrd", "durlddud", "urrrldud", "ulllllll"]; // lost 21
    var test3 = ["5 8", "0 0", "rrrrrrrd", "rludulrd", "lurlddud", "urrrldud", "ulllllll"]; // out 442

    solve(test3);
}());