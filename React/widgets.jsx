import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Frontend/clock';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Clock/>, root);
});
