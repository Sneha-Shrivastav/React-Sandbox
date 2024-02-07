import React from 'react';
import ReactDOM from 'react-dom';

const name = "Sneha"
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const link1 = "https://picsum.photos"

const img_div = {
  display: 'flex',
  justifyContent: 'center',
}


ReactDOM.render(
  <>
    <h1 style={{
      color: '#fa9191',
      textTransform: 'capitalize',
      textAlign: 'center',
      fontWeight: 'bold',
      textShadow: '0px 2px 4px #ffe9c5',
      margin: '70px 0px',
      fontFamily: '"Josefin Sans", sans-serif'
    }}>My name is {name}</h1>                                                     {/* internal CSS */}


    <div style={img_div}>                                                         {/* inline CSS */}
      <img src={img1} alt="random Images" />
      <img src={img2} alt="random Images" />
      <a href={link1} target='_blank'>
        <img src={img3} alt="random Images" />
      </a>
    </div>
  </>,
  document.getElementById('root')
);