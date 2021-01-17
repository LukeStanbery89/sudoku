import React from "react";

export default function Square({ val, row, column, onChange }) {
    return (
        <input
            type="number"
            min="1"
            max="9"
            value={val}
            onChange={(e) => onChange(row, column, e.target.value)}
        />
    );
}
