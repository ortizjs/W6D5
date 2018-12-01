import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
const Root = () => (
  <div>
    <Clock/>
    <Tab values={[{one: "I am the first tab"}, {two: "I am the second tab"}, {three: "I am the third tab"}]}/>
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root/>, root);
});
