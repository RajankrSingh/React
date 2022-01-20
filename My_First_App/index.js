//var React = require('react');
import React from 'react';  //to use JSX file
//var ReactDOM = require('react-dom');
import ReactDOM from  'react-dom';

//To print Hello World using React
ReactDOM.render(<h1>Hello World! in React</h1>, document.getElementById("root"));


//To print Hello World using bible compiler
ReactDOM.render(React.createElement("h1", null, "Hello World! in React"), document.getElementById("root"));

//To print Hello World using JavaScript
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World! in javascript";
document.getElementById("root").appendChild(h1);
