import React from "react";
import { render } from "react-dom";
import GameBoard from "./GameBoard";
import "../styles.scss";

const App = () => {
    return <GameBoard />;
};

render(<App />, document.getElementById("root"));
