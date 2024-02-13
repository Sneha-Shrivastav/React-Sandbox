import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css'
import Sdata from './Sdata';



ReactDOM.render(
  <>
    <h1 className='heading_style'>Sneha's top 5 Netflix Pick</h1>
    {Sdata.map((val) => {
      return(
        <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
      )
    })}
  </>, document.getElementById('root')
);

