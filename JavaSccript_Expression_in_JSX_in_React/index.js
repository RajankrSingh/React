import React from 'react';
import ReactDOM from 'react-dom';

//JavaSccript Expression in JSX in React

var f1name = "React";
let f2name = "Node";
const f3name = "Ember";

ReactDOM.render(
[
<h1>My Name IS {f1name}</h1>, //JavaSccript Expression in JSX in React
<h1>My Name IS {f2name}</h1>,
<h1>My Name IS {f3name}</h1>,

<p>My Fav. no is 25</p>,
<p>My Fav. no is {20+5}</p> //JavaSccript Expression in JSX in React
],

document.getElementById("root"),
);
