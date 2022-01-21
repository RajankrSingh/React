import React from 'react';
import ReactDOM  from 'react-dom';


//To Display Current Date And Time

const name = "Rajan Singh";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(

<>

<h1>Hello, My Name Is {`${name}`}</h1>

<p>Today's Current Date Is = {`${currdate}`} </p>

<p>Today's Current time Is = {`${currtime}`} </p>


</>,


document.getElementById("root")
);
