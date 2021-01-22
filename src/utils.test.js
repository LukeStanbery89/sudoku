const utils = require('./utils');

test('Expect to receive a new game board with a valid solution', () => {
    const gameBoard = utils.getNewGameBoard();
    const n = gameBoard.length;

    expect(gameBoard).toHaveLength(9);

    for (let i = 0; i < n; i++) {
        expect(gameBoard[i]).toHaveLength(9);
        expect(gameBoard[i]).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }
});

test('Expect full game board to validate correctly', () => {
    expect(utils.gameBoardIsValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(true);

    expect(utils.gameBoardIsValid([
        [0, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(false);

    expect(utils.rowsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(true);

    expect(utils.gameBoardIsValid([
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(false);

    expect(utils.gameBoardIsValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5, 0],
        [1, 4, 3, 2, 5, 9, 7, 8, 6, 0],
        [5, 2, 8, 3, 7, 6, 1, 9, 4, 0],
        [6, 9, 4, 5, 1, 8, 2, 3, 7, 0],
        [8, 1, 2, 7, 3, 4, 5, 6, 9, 0],
        [7, 3, 5, 9, 6, 2, 4, 1, 8, 0],
        [4, 6, 7, 8, 2, 3, 9, 5, 1, 0],
        [2, 5, 1, 6, 9, 7, 8, 4, 3, 0],
        [3, 8, 9, 1, 4, 5, 6, 7, 2, 0],
    ])).toBe(false);

    expect(utils.gameBoardIsValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])).toBe(false);
});

test('Expect rows with 1-9 to validate correctly', () => {
    expect(utils.rowsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(true);

    expect(utils.rowsAreValid([
        [2, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(false);

    expect(utils.rowsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ])).toBe(false);
});

test('Expect columns with 1-9 to validate correctly', () => {
    expect(utils.columnsAreValid([
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(true);

    expect(utils.columnsAreValid([
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(false);

    expect(utils.columnsAreValid([
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
        [10, 10, 10, 10, 10, 10, 10, 10, 10],
    ])).toBe(false);
});

test('All nine of the 3x3 grids to validate correctly', () => {
    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(true);

    expect(utils.gridsAreValid([
        [0, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5, 0],
        [1, 4, 3, 2, 5, 9, 7, 8, 6, 0],
        [5, 2, 8, 3, 7, 6, 1, 9, 4, 0],
        [6, 9, 4, 5, 1, 8, 2, 3, 7, 0],
        [8, 1, 2, 7, 3, 4, 5, 6, 9, 0],
        [7, 3, 5, 9, 6, 2, 4, 1, 8, 0],
        [4, 6, 7, 8, 2, 3, 9, 5, 1, 0],
        [2, 5, 1, 6, 9, 7, 8, 4, 3, 0],
        [3, 8, 9, 1, 4, 5, 6, 7, 2, 0],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])).toBe(false);
});

test('Expect partial game board to validate correctly', () => {
    expect(utils.partialGameBoardIsValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(true);

    expect(utils.partialGameBoardIsValid([
        [null, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, null, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, null, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, null, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, null, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, null, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, null, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, null, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, null],
    ])).toBe(true);

    expect(utils.partialGameBoardIsValid([
        [null, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, null, 3, 2, 5, 9, 7, 8, 6],
        [1, 2, null, 3, 7, 6, 1, 9, 4],
        [1, 9, 4, null, 1, 8, 2, 3, 7],
        [1, 1, 2, 7, null, 4, 5, 6, 9],
        [1, 3, 5, 9, 6, null, 4, 1, 8],
        [1, 6, 7, 8, 2, 3, null, 5, 1],
        [1, 5, 1, 6, 9, 7, 8, null, 3],
        [1, 8, 9, 1, 4, 5, 6, 7, null],
    ])).toBe(false);

    expect(utils.partialGameBoardIsValid([
        [null, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, null, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, null, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, null, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, null, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, null, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, null, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, null, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, null],
    ])).toBe(false);

    expect(utils.partialGameBoardIsValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 10],
        [1, 4, 3, 2, 50, 9, 7, 8, 6],
        [5, 99, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(false);

    expect(utils.partialGameBoardIsValid([
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
    ])).toBe(true);

    expect(utils.partialGameBoardIsValid([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ])).toBe(false);

    expect(utils.partialGameBoardIsValid([
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
    ])).toBe(false);
});

test('Expect partial rows with 1-9 to validate correctly', () => {
    expect(utils.rowsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(true);

    expect(utils.rowsAreValid([
        [null, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(true);

    expect(utils.rowsAreValid([
        [null, null, null, null, null, null, null, null, null],
    ])).toBe(true);

    expect(utils.rowsAreValid([
        [null, null, null, null, null, null, null, null, null, null],
    ])).toBe(true);

    expect(utils.rowsAreValid([
        [2, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(false);

    expect(utils.rowsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ])).toBe(false);
});

test('Expect partial columns with 1-9 to validate correctly', () => {
    expect(utils.columnsAreValid([
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(true);

    expect(utils.columnsAreValid([
        [null, null, null, null, null, null, null, null, null],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(true);

    expect(utils.columnsAreValid([
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(false);

    expect(utils.columnsAreValid([
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
        [10, 10, 10, 10, 10, 10, 10, 10, 10],
    ])).toBe(false);

    expect(utils.columnsAreValid([
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
    ])).toBe(true);

    expect(utils.columnsAreValid([
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
    ])).toBe(false);
});

test('Expect all nine of the partial 3x3 grids to validate correctly', () => {
    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(true);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, null, 3, 2, null, 9, 7, null, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, null, 2, 7, null, 4, 5, null, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, null, 1, 6, null, 7, 8, null, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(true);

    expect(utils.gridsAreValid([
        [0, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [0, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, null, 3, 2, null, 9, 7, null, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, null, 2, 7, null, 4, 5, null, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, null, 1, 6, null, 7, 8, null, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 0],
    ])).toBe(true);

    expect(utils.gridsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [null, null, null, null, null, null, null, null, null],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [null, null, null, null, null, null, null, null, null],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [null, null, null, null, null, null, null, null, null],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [1, null, 1, 1, null, 1, 1, null, 1],
        [2, null, 2, 2, null, 2, 2, null, 2],
        [3, null, 3, 3, null, 3, 3, null, 3],
        [4, null, 4, 4, null, 4, 4, null, 4],
        [5, null, 5, 5, null, 5, 5, null, 5],
        [6, null, 6, 6, null, 6, 6, null, 6],
        [7, null, 7, 7, null, 7, 7, null, 7],
        [8, null, 8, 8, null, 8, 8, null, 8],
        [9, null, 9, 9, null, 9, 9, null, 9],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5, 0],
        [1, 4, 3, 2, 5, 9, 7, 8, 6, 0],
        [5, 2, 8, 3, 7, 6, 1, 9, 4, 0],
        [6, 9, 4, 5, 1, 8, 2, 3, 7, 0],
        [8, 1, 2, 7, 3, 4, 5, 6, 9, 0],
        [7, 3, 5, 9, 6, 2, 4, 1, 8, 0],
        [4, 6, 7, 8, 2, 3, 9, 5, 1, 0],
        [2, 5, 1, 6, 9, 7, 8, 4, 3, 0],
        [3, 8, 9, 1, 4, 5, 6, 7, 2, 0],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5, 0],
        [1, null, 3, 2, null, 9, 7, null, 6, 0],
        [5, 2, 8, 3, 7, 6, 1, 9, 4, 0],
        [6, 9, 4, 5, 1, 8, 2, 3, 7, 0],
        [8, null, 2, 7, null, 4, 5, null, 9, 0],
        [7, 3, 5, 9, 6, 2, 4, 1, 8, 0],
        [4, 6, 7, 8, 2, 3, 9, 5, 1, 0],
        [2, null, 1, 6, null, 7, 8, null, 3, 0],
        [3, 8, 9, 1, 4, 5, 6, 7, 2, 0],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, null, 3, 2, null, 9, 7, null, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, null, 2, 7, null, 4, 5, null, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, null, 1, 6, null, 7, 8, null, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5, null],
        [1, 4, 3, 2, 5, 9, 7, 8, 6, null],
        [5, 2, 8, 3, 7, 6, 1, 9, 4, null],
        [6, 9, 4, 5, 1, 8, 2, 3, 7, null],
        [8, 1, 2, 7, 3, 4, 5, 6, 9, null],
        [7, 3, 5, 9, 6, 2, 4, 1, 8, null],
        [4, 6, 7, 8, 2, 3, 9, 5, 1, null],
        [2, 5, 1, 6, 9, 7, 8, 4, 3, null],
        [3, 8, 9, 1, 4, 5, 6, 7, 2, null],
    ])).toBe(false);

    expect(utils.gridsAreValid([
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
        [null, null, null, null, null, null, null, null, null],
    ])).toBe(false);
});

test('Expect a partial 1-9 test case map to validate correctly', () => {
    expect(utils.partialTestCaseIsValid(new Map([
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
    ]))).toBe(true);

    expect(utils.partialTestCaseIsValid(new Map([
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
    ]))).toBe(true);

    expect(utils.partialTestCaseIsValid(new Map([
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
    ]))).toBe(true);

    expect(utils.partialTestCaseIsValid(new Map([
        [5, 1],
    ]))).toBe(true);

    expect(utils.partialTestCaseIsValid(new Map([
        [1, 2],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
    ]))).toBe(false);

    expect(utils.partialTestCaseIsValid(new Map([
        [1, 5],
        [2, 4],
        [3, 5],
        [4, 4],
        [5, 3],
        [6, 2],
        [7, 1],
        [8, 189],
        [9, 2],
    ]))).toBe(false);

    expect(utils.partialTestCaseIsValid(new Map([
        [1, 3],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 4],
    ]))).toBe(false);

    expect(utils.partialTestCaseIsValid(new Map([
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
        [10, 1],
    ]))).toBe(false);

    expect(utils.partialTestCaseIsValid(new Map([
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
        [10, 20],
    ]))).toBe(false);

    expect(utils.partialTestCaseIsValid(new Map([
        [10, 1],
    ]))).toBe(false);

    expect(utils.partialTestCaseIsValid(new Map([
        [10, 6],
    ]))).toBe(false);
});
