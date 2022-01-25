import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';


ReactDOM.render(
    <>
<h1 className='heading_style'>List of top 6 Netflix Series in 2020</h1>

<Card 
    imgsrc={Sdata[0].imgscr}
    sname={Sdata[0].sname}
    title={Sdata[0].title}
    link={Sdata[0].links}
/>

<Card 
    imgsrc={Sdata[1].imgscr}
    sname={Sdata[1].sname}
    title={Sdata[1].title}
    link={Sdata[1].links}
/>

<Card 
    imgsrc={Sdata[2].imgscr}
    sname={Sdata[2].sname}
    title={Sdata[2].title}
    link={Sdata[2].links}
/>

<Card 
    imgsrc={Sdata[3].imgscr}
    sname={Sdata[3].sname}
    title={Sdata[3].title}
    link={Sdata[3].links}
/>

<Card 
    imgsrc={Sdata[4].imgscr}
    sname={Sdata[4].sname}
    title={Sdata[4].title}
    link={Sdata[4].links}
/>

<Card 
    imgsrc={Sdata[5].imgscr}
    sname={Sdata[5].sname}
    title={Sdata[5].title}
    link={Sdata[5].links}
/>



    </>,
document.getElementById('root'));
