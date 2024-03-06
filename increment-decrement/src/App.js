import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0)

  const Inc = () => {
    setNum(num+1)
  }

  const dec = () => {
    if(num===0){
      alert("zero limit reached")
      setNum(0)
    }else{
      setNum(num-1)
    }
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{num}</h1>
          <br />
          <button onClick={Inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
