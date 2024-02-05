import React from 'react';
import ReactDOM from 'react-dom';

const flname = 'Sneha Shrivastava'


ReactDOM.render(
  <>
  <h1>My name is {flname} </h1>
  <p>My year of graduation is {2000 + 22}</p>
  <p>Your random number is {Math.random()}</p>
  </>,
  document.getElementById('root')
);
