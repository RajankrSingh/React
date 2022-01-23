import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currdate = new Date(2022, 1, 23, 20);
currdate = currdate.getHours();
let greeting = "";
const cssStyle = {};



if(currdate >= 1 && currdate < 12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
}else if(currdate >= 12 && currdate < 19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';
}else{
    greeting = 'Good Night';
    cssStyle.color = 'black';
}

ReactDOM.render(

<>
<div>
<h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
</div>
</>,

document.getElementById('root'));
