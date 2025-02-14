function getRow(rowIndex) {
    return {
        from(board) {
            return board[rowIndex];
        },
    };
}

function getColumn(columnIndex) {
    return {
        from(board) {
            const result = [];
            for (let i = 0; i < board.length; i++) {
                result.push(board[i][columnIndex]);
            }
            return result;
        },
    };
}

function getDiagonal(diagonalIndex) {
    return {
        from(board) {
            if (diagonalIndex === 0) {
                return [board[0][0], board[1][1], board[2][2]];
            }
            if (diagonalIndex === 1) {
                return [board[0][2], board[1][1], board[2][0]];
            }
        },
    };
}

function allEqualsIn(arr) {
    return arr.every((e) => {
        return e.playerIndex !== null && e.playerIndex === arr[0].playerIndex;
    });
}

function rowsCheck(board) {
    for (let i = 0; i < 3; i++) {
        const row = getRow(i).from(board);
        if (allEqualsIn(row))
            return [
                [i, 0],
                [i, 1],
                [i, 2],
            ];
    }
    return null;
}

function columnsCheck(board) {
    for (let i = 0; i < 3; i++) {
        const column = getColumn(i).from(board);
        if (allEqualsIn(column))
            return [
                [0, i],
                [1, i],
                [2, i],
            ];
    }
    return null;
}

function diagonalsCheck(board) {
    const firstDiagonal = getDiagonal(0).from(board);
    const secondDiagonal = getDiagonal(1).from(board);
    if (allEqualsIn(firstDiagonal))
        return [
            [0, 0],
            [1, 1],
            [2, 2],
        ];
    if (allEqualsIn(secondDiagonal))
        return [
            [0, 2],
            [1, 1],
            [2, 0],
        ];
    return null;
}

function checkBoard(board) {
    const row = rowsCheck(board);
    const column = columnsCheck(board);
    const diagonal = diagonalsCheck(board);
    if (row) return row;
    if (column) return column;
    if (diagonal) return diagonal;
    return null;
}

export { checkBoard }