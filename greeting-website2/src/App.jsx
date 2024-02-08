import React from 'react';
import './index.css'



function App() {
  // new Date(Year, Month, Date, Hours, Minutes, Seconds, Miliseconds)
  let currTime = new Date()
  currTime = currTime.getHours()
  let greeting = ''
  const cssStyle = {}

  if (currTime > 1 && currTime < 12) {
    greeting = 'Good Morning'
    cssStyle.color = '#00b894'
  } else if (currTime > 12 && currTime < 19) {
    greeting = 'Good Afternoon'
    cssStyle.color = 'Orange'
  } else {
    greeting = 'Good Night'
    cssStyle.color = 'violet'
  }

  return (
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  )
}

export default App;
