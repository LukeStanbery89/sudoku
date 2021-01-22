const isEqual = require('lodash.isequal');

export function getNewGameBoard() {
    // TODO: Write an algorithm to spin up a new game board 
    return [
        [9, 7, 6, 4, 8, 1, 3, 2, 5],
        [1, 4, 3, 2, 5, 9, 7, 8, 6],
        [5, 2, 8, 3, 7, 6, 1, 9, 4],
        [6, 9, 4, 5, 1, 8, 2, 3, 7],
        [8, 1, 2, 7, 3, 4, 5, 6, 9],
        [7, 3, 5, 9, 6, 2, 4, 1, 8],
        [4, 6, 7, 8, 2, 3, 9, 5, 1],
        [2, 5, 1, 6, 9, 7, 8, 4, 3],
        [3, 8, 9, 1, 4, 5, 6, 7, 2],
    ];
}

export function gameBoardIsValid(gameBoard) {

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
    // Ensure that the gameboard is the correct dimensions
    if (gameBoard.length !== 9 || gameBoard[0].length !== 9) {
        return false;
    }

    let validNumbers = getComparisonMap();

    // Iterate over the nine 3x3 grids within the gameboard
    for (let gridRow = 0; gridRow < 3; gridRow++) {
        for (let gridCol = 0; gridCol < 3; gridCol++) {

            // Iterate over each square within the current 3x3 grid
            let testCase = new Map();
            let rowStart = gridRow * 3;
            let rowEnd = rowStart + 2;
            let colStart = gridCol * 3;
            let colEnd = colStart + 2;

            for (let row = rowStart; row <= rowEnd; row++) {
                for (let column = colStart; column <= colEnd; column++) {
                    testCase.set(gameBoard[row][column], testCase.get(gameBoard[row][column]) ? testCase.get(gameBoard[row][column]) + 1 : 1);
                }
            }

            // Ensure that each number 1-9 appears exactly once
            if (!isEqual(testCase, validNumbers)) return false;

            testCase = new Map();
        }
    }

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

        // Ensure that only numbers 1-9 appear, and no more than once
        if (!partialTestCaseIsValid(testCase)) return false;

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

        // Ensure that only numbers 1-9 appear, and no more than once
        if (!partialTestCaseIsValid(testCase)) return false;

        testCase = new Map();
    }

    return true;
}

export function partialGridsAreValid(gameBoard) {
    // Ensure that the gameboard is the correct dimensions
    if (gameBoard.length !== 9 || gameBoard[0].length !== 9) {
        return false;
    }

    // Iterate over the nine 3x3 grids within the gameboard
    for (let gridRow = 0; gridRow < 3; gridRow++) {
        for (let gridCol = 0; gridCol < 3; gridCol++) {

            // Iterate over each square within the current 3x3 grid
            let testCase = new Map();
            let rowStart = gridRow * 3;
            let rowEnd = rowStart + 2;
            let colStart = gridCol * 3;
            let colEnd = colStart + 2;

            for (let row = rowStart; row <= rowEnd; row++) {
                for (let column = colStart; column <= colEnd; column++) {
                    testCase.set(gameBoard[row][column], testCase.get(gameBoard[row][column]) ? testCase.get(gameBoard[row][column]) + 1 : 1);
                }
            }

            // Ensure that only numbers 1-9 appear, and no more than once
            if (!partialTestCaseIsValid(testCase)) return false;

            testCase = new Map();
        }
    }

    return true;
}

// TODO: Write test
export function partialTestCaseIsValid(testCase) {
    let valid = true;

    testCase.forEach((value, key, map) => {
        if (key < 1 || key > 9 || value > 1) {
            valid = false;
        }
    });

    return valid;
}
