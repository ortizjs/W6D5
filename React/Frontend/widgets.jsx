import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';
const Root = () => (
  <div>
    <Clock/>
    <Tab values={[{title:"one", value:"I am the first tab"}, {title:"two", value:"I am the second tab"}, {title:"three", value:"I am the third tab"}]}/>
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root/>, root);
});
