import React from 'react';
import { add, sub, mul, div } from './Calc';

function App(){
  return(
    <ul>
      <li>Sum of two number is {add(30,3)}</li>
      <li>Sub of two number is {sub(30,3)}</li>
      <li>Mult of two number is {mul(30,3)}</li>
      <li>Div of two number is {div(30,7)}</li>
    </ul>
  );
}

export default App;