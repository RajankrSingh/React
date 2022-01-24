import React from 'react';
//import ReactDOM from 'react-dom';
import {add, sub, mult, div} from './Calc';
import Heading from './Heading';


function App(){
    return(
        [
<Heading/>,
<ul>
    <li>Sum of two no. is {add(10,20)}</li>
    <li>Sub of two no. is {sub(20,30)}</li>
    <li>Mult of two no. is {mult(10,20)}</li>
    <li>Div of two no. is {div(5,3)}</li>
</ul>
        ]
    );
}
export default App;