import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "LOADED!")
    )
}

render(<App />, document.getElementById('root'))