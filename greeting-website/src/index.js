import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let currTime = new Date();
currTime = currTime.getHours();
let Greeting = ''
const cssStyle = {}

if (currTime > 1 && currTime < 12) {
  Greeting = "Good Morning";
  cssStyle.color = 'green'
} else if (currTime > 12 && currTime < 19) {
  Greeting = "Good Afternoon";
  cssStyle.color = 'orange'
} else {
  Greeting = "Good Night";
  cssStyle.color = 'violet'
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{Greeting}</span></h1>
    </div>
  </>
  , document.getElementById('root')
);
