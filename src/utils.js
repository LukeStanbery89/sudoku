const isEqual = require('lodash.isequal');

export function getNewGameBoard() {
    // TODO: Write an algorithm to spin up a new game board 
    return [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],
        [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ];
}

export function gameBoardIsValid(gameBoard) {
    console.log('gameBoard: ', gameBoard);

    if (!rowsAreValid(gameBoard)) return false;

    if (!columnsAreValid(gameBoard)) return false;

    if (!gridsAreValid(gameBoard)) return false;

    return true;
}

export function rowsAreValid(gameBoard) {
    let validNumbers = getComparisonMap();

    let testCase = new Map();
    for (const row in gameBoard) {
        for (const column in gameBoard[row]) {
            testCase.set(gameBoard[row][column], testCase.get(gameBoard[row][column]) ? testCase.get(gameBoard[row][column]) + 1 : 1);
        }

        // Ensure that each number 1-9 appears exactly once
        if (!isEqual(testCase, validNumbers)) return false;

        testCase = new Map();
    }

    return true;
}

export function columnsAreValid(gameBoard) {
    const rowCount = gameBoard.length;
    const colCount = gameBoard[0].length;

    let validNumbers = getComparisonMap();

    let testCase = new Map();
    for (let column = 0; column < colCount; column++) {
        for (let row = 0; row < rowCount; row++) {
            testCase.set(gameBoard[row][column], testCase.get(gameBoard[row][column]) ? testCase.get(gameBoard[row][column]) + 1 : 1);
        }

        // Ensure that each number 1-9 appears exactly once
        if (!isEqual(testCase, validNumbers)) return false;

        testCase = new Map();
    }

    return true;
}

export function gridsAreValid(gameBoard) {
    // TODO: Write grid validation function
    return true;
}

export function getComparisonMap() {
    let map = new Map();
    map.set(1, 1);
    map.set(2, 1);
    map.set(3, 1);
    map.set(4, 1);
    map.set(5, 1);
    map.set(6, 1);
    map.set(7, 1);
    map.set(8, 1);
    map.set(9, 1);

    return map;
}

export function partialGameBoardIsValid(gameBoard) {
    console.log('gameBoard: ', gameBoard);

    if (!partialRowsAreValid(gameBoard)) return false;

    if (!partialColumnsAreValid(gameBoard)) return false;

    if (!partialGridsAreValid(gameBoard)) return false;

    return true;
}

export function partialRowsAreValid(gameBoard) {
    let testCase = new Map();
    for (const row in gameBoard) {
        for (const column in gameBoard[row]) {
            if (gameBoard[row][column]) {
                testCase.set(gameBoard[row][column], testCase.get(gameBoard[row][column]) ? testCase.get(gameBoard[row][column]) + 1 : 1);
            }
        }

        // Ensure that no numbers are repeated
        for (const [key, value] of testCase) {
            console.log(value, key);
            if (value !== 1) {
                return false;
            }
        }

        testCase = new Map();
    }

    return true;
}

export function partialColumnsAreValid(gameBoard) {
    const rowCount = gameBoard.length;
    const colCount = gameBoard[0].length;

    let testCase = new Map();
    for (let column = 0; column < colCount; column++) {
        for (let row = 0; row < rowCount; row++) {
            testCase.set(gameBoard[row][column], testCase.get(gameBoard[row][column]) ? testCase.get(gameBoard[row][column]) + 1 : 1);
        }

        // Ensure that no numbers are repeated
        for (const [key, value] of testCase) {
            console.log(value, key);
            if (value !== 1) {
                return false;
            }
        }

        testCase = new Map();
    }

    return true;
}

export function partialGridsAreValid(gameBoard) {
    // TODO: Write grid validation function
    return true;
}
