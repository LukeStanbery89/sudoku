import React from "react";
import Square from "./Square";

function GameBoard() {
    const squares = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ];

    return (
        <table>
            <tbody>
                {squares.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex}>
                            {row.map((column, columnIndex) => {
                                return (
                                    <td key={columnIndex}>
                                        <Square val={column} />
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

export default GameBoard;
