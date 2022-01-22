import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name = "React";
const img1 = "https://picsum.photos/280/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/390/300";
const img4 = "https://picsum.photos/350/300";

const link = "https://www.blueberryeservices.com/";

ReactDOM.render(
[

<h1 className='heading'>Make Gallery In {name}</h1>,

<div className='img_div'>

<a href={link} target="_blank">
<img src={img1}/>,
<img src={img2}/>,
<img src={img3}/>,
<img src={img4}/>
</a>
</div>
],
document.getElementById("root")
);
