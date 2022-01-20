//var React = require('react');
import React from 'react';  //to use JSX file
//var ReactDOM = require('react-dom');
import ReactDOM from  'react-dom';

//Render Multiple Elements inside ReactDOM.render() in React
// To use <React.Fragment> if your React version is below 16
//To use React.Fragment in behalf of DIV to save some memory
ReactDOM.render(
  <React.Fragment>
  <h1>Hello React!</h1>
    <p>Using multiple Elements</p>
    <h1>Hello React!</h1>
    <p>Using multiple Elements</p>
    </React.Fragment>,
    document.getElementById("root"));
