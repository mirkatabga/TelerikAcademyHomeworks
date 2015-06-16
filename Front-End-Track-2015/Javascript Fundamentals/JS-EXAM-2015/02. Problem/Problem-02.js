function solve(args) {
    var input = args;
    var rows = parseInt(input[0]),
        cols = parseInt(input[1]),
        tests = parseInt(input[rows + 2]),
        i,
        board = [],
        figureBoard = [],
        moves;

    input.shift();
    input.shift();

    var code = 97;

    for (var i = 0; i < rows; i++) {
        board[i] = [];
        figureBoard[i] = [];
        for (var j = 0; j < cols; j++) {
            board[i][j] = input[i][j];
            if (board[i][j] === '-') {
                board[i][j] = '';
                board[i][j] += String.fromCharCode(code) + (rows - i);
                figureBoard[i][j] = '';
            }
            else {
                board[i][j] = '';
                board[i][j] += String.fromCharCode(code) + (rows - i);
                figureBoard[i][j] = input[i][j];
            }
            code++;
        }

        code = 97;
    }


    for (var i = 0; i < rows; i++) {
        input.shift();
    }

    var movesCount = parseInt(input.shift());

    moves = input;

    for (var i = 0; i < movesCount; i++) {
        pair = moves[i].split(' ');
        move(pair[0], pair[1]);
    }

    function move(cellOne, cellTwo) {
        var figureIndex,
            figure;

        function moveUp(figure, startCell, endCell) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i - 1;
                        var c = j;
                        while (r >= 0) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                figureBoard[i][j] = '';
                                figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            r--;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        function moveDown(figure, startCell, endCell) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i + 1;
                        var c = j;
                        while (r < rows) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                //figureBoard[i][j] = '';
                                //figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            r++;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        function moveLeft(figure, startCell, endCell) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i;
                        var c = j - 1;
                        while (c >= 0) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                //figureBoard[i][j] = '';
                                //figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            c--;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        function moveRight(figure, startCell, endCell) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i;
                        var c = j + 1;
                        while (c < cols) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                //figureBoard[i][j] = '';
                                //figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            c++;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        function moveUpLeft(figure, startCell, endCell) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i - 1;
                        var c = j - 1;
                        while (r >= 0 && c >= 0) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                //figureBoard[i][j] = '';
                                //figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            r--;
                            c--;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        function moveUpRight(figure, startCell, endCell){
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i - 1;
                        var c = j + 1;
                        while (r >= 0 && c < cols) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                //figureBoard[i][j] = '';
                                //figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            r--;
                            c++;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        function moveDownRight(figure,startCell,endCell) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i + 1;
                        var c = j + 1;
                        while (r < rows && c < cols) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                //figureBoard[i][j] = '';
                                //figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            r++;
                            c++;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        function moveDownLeft(figure, startCell, endCell) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (board[i][j] === startCell) {
                        var r = i + 1;
                        var c = j - 1;
                        while (r < rows && c >= 0) {
                            if (figureBoard[r][c] !== '') {
                                console.log('no');
                                return;
                            }

                            if (board[r][c] === endCell) {
                                //figureBoard[i][j] = '';
                                //figureBoard[r][c] = figure;
                                console.log('yes');
                                return;
                            }

                            r++;
                            c--;
                        }
                        console.log('no');
                        return;
                    }
                }
            }
        }

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (board[i][j] === cellOne) {
                    if (figureBoard[i][j] !== '') {
                        figure = figureBoard[i][j];
                        var columnId = board[i][j][0]; // letter
                        var rowId = board[i][j][1]; // number

                        if (figure === 'R') {
                            var rook = figure;

                            if (cellTwo[0] !== columnId && cellTwo[1] !== rowId) {
                                console.log('no');
                                return;
                            }
                            else {
                                if (cellTwo[0] === columnId) {
                                    // move in column
                                    if (parseInt(cellTwo[1]) > parseInt(cellOne[1])) {
                                        moveUp(rook, cellOne, cellTwo);
                                    }
                                    else if (parseInt(cellTwo[1]) < parseInt(cellOne[1])) {
                                        moveDown(rook, cellOne, cellTwo);
                                    }
                                    else {
                                        //if cellOne === cellTwo
                                        console.log('no');
                                        return;
                                    }

                                }
                                else if (cellTwo[1] === rowId) {
                                    // move in row
                                    if (cellTwo[0] > cellOne[0]) {
                                        moveRight(rook,cellOne,cellTwo);
                                    }
                                    else if (cellTwo[0] < cellOne[0]) {
                                        moveLeft(rook, cellOne, cellTwo);
                                    }
                                    else {
                                        //if cellOne === cellTwo
                                        console.log('no');
                                        return;
                                    }
                                }
                            }
                        }
                        if (figure === 'B') {
                            var bishop = figure;

                            if (cellTwo[0] === rowId || cellTwo[1] === columnId) {
                                console.log('no');
                                return;
                            }
                            else {
                                if (cellTwo[0] > cellOne[0] && parseInt(cellTwo[1]) > parseInt(cellOne[1])) {
                                    moveUpRight(bishop,cellOne,cellTwo);
                                }
                                else if (cellTwo[0] > cellOne[0] && parseInt(cellTwo[1]) < parseInt(cellOne[1])) {
                                    moveDownRight(bishop,cellOne,cellTwo);
                                }
                                else if (cellTwo[0] < cellOne[0] && parseInt(cellTwo[1]) < parseInt(cellOne[1])) {
                                    moveDownLeft(bishop,cellOne,cellTwo);
                                }
                                else if (cellTwo[0] < cellOne[0] && parseInt(cellTwo[1]) > parseInt(cellOne[1])) {
                                    moveUpLeft(bishop,cellOne,cellTwo);
                                }
                                else {
                                    //if cellOne === cellTwo
                                    console.log('no');
                                    return;
                                }
                            }
                        }
                        if (figure === 'Q') {
                            var queen = figure;

                            if (cellTwo[0] === columnId) {
                                // move in column
                                if (parseInt(cellTwo[1]) > parseInt(cellOne[1])) {
                                    moveUp(queen, cellOne, cellTwo);
                                }
                                else if (parseInt(cellTwo[1]) < parseInt(cellOne[1])) {
                                    moveDown(queen, cellOne, cellTwo);
                                }
                                else {
                                    //if cellOne === cellTwo
                                    console.log('no');
                                    return;
                                }

                            }
                            else if (cellTwo[1] === rowId) {
                                // move in row
                                if (cellTwo[0] > cellOne[0]) {
                                    moveRight(queen,cellOne,cellTwo);
                                }
                                else if (cellTwo[0] < cellOne[0]) {
                                    moveLeft(queen, cellOne, cellTwo);
                                }
                            }
                            else {
                                if (cellTwo[0] > cellOne[0] && parseInt(cellTwo[1]) > parseInt(cellOne[1])) {
                                    moveUpRight(queen,cellOne,cellTwo);
                                }
                                else if (cellTwo[0] > cellOne[0] && parseInt(cellTwo[1]) < parseInt(cellOne[1])) {
                                    moveDownRight(queen,cellOne,cellTwo);
                                }
                                else if (cellTwo[0] < cellOne[0] && parseInt(cellTwo[1]) < parseInt(cellOne[1])) {
                                    moveDownLeft(queen,cellOne,cellTwo);
                                }
                                else if (cellTwo[0] < cellOne[0] && parseInt(cellTwo[1]) > parseInt(cellOne[1])) {
                                    moveUpLeft(queen,cellOne,cellTwo);
                                }

                            }

                            if (cellOne === cellTwo) {
                                console.log('no');
                                return;
                            }
                        }
                    }
                    else if(figure === undefined || figure === '') {
                        console.log('no');
                    }

                    break;
                }
            }
        }

    }
}


(function () {
    var test0 = [
'3', '4',
'--R-',
'B--B',
'Q--Q',
'12',
'd1 b3',
'a1 a3',
'c3 b2',
'a1 c1',
'a1 b2',
'a1 c3',
'a2 b3',
'd2 c1',
'b1 b2',
'c3 b1',
'a2 a3',
'd1 d3'];
    var test1 = [
'5',
'5',
'Q---Q',
'-----',
'-B---',
'--R--',
'Q---Q',
'10',
'a1 a1',
'a1 d4',
'e1 b4',
'a5 d2',
'e5 b2',
'b3 d5',
'b3 a2',
'b3 d1',
'b3 a4',
'c2 c5'
];

    solve(test1);
}());