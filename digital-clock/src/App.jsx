import React,{useState} from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const[cTime, setCTime] = useState(time)

  const currTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time)
  };

  setInterval(currTime,1000)


  return(
    <>
      <h1>{cTime}</h1>
    </>
  )
}

export default App;
