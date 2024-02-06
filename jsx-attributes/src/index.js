import React from 'react';
import ReactDOM from 'react-dom';

const name = "Sneha"
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const link1 = "https://picsum.photos"

ReactDOM.render(
  <>
  <h1 contentEditable="true">My name is {name}</h1>
  <img src = {img1}  alt = "random Images"/>
  <img src = {img2}  alt = "random Images"/>
  <a href = {link1} target='_blank'>
  <img src = {img3}  alt = "random Images"/>
  </a>
  </>,
  document.getElementById('root')
);