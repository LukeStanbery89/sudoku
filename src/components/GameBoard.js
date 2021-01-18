import React, { useState } from "react";
import Square from "./Square";
import { partialGameBoardIsValid, getNewGameBoard } from "../utils";

export default function GameBoard() {
    const [squares, setSquares] = useState(getNewGameBoard());

    function updateGameBoard(row, column, value) {
        let tempSquares = [...squares];
        tempSquares[row][column] = parseInt(value) || value;
        setSquares(tempSquares);
        console.log("gameBoardIsValid: ", partialGameBoardIsValid(squares));
    }

    return (
        <table>
            <tbody>
                {squares.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex}>
                            {row.map((column, columnIndex) => {
                                return (
                                    <td key={columnIndex}>
                                        <Square
                                            val={column}
                                            row={rowIndex}
                                            column={columnIndex}
                                            onChange={updateGameBoard}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
