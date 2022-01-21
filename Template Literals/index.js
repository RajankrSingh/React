import React from 'react'
import ReactDOM from 'react-dom'

const fname = "Rajan";
const lname = "Singh";

ReactDOM.render(

[ //for using multiple Elements

//with the help of `` we are using multiple Template Literals
<h1> {`my first name is ${fname} and my last name is ${lname}`}</h1>,

<p>My Age is {`${20+5}`}</p>
],
document.getElementById("root"));
