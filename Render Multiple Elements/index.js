//var React = require('react');
import React from 'react';  //to use JSX file
//var ReactDOM = require('react-dom');
import ReactDOM from  'react-dom';

//Render Multiple Elements inside ReactDOM.render() in React
// In React V16 or 16+ it;s possible for render()
ReactDOM.render(
  [
  <h1>Hello React!</h1>,
    <p>Using multiple Elements</p>,
    <h1>Hello React!</h1>,
    <p>Using multiple Elements</p>
  ],
    document.getElementById("root"));
