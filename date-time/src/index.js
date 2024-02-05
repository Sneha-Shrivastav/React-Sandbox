import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Sneha"
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


ReactDOM.render(
  <>
    <h1>{`My name is ${fname}`}</h1>
    <p>{`Today's date ${currDate}`}</p>
    <p>{`Current time is ${currTime}`}</p>
  </>,
  document.getElementById('root')
)