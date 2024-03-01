import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [fullName, setFullName] = useState()
  const [lastName, setLastName] = useState("")
  const[lName, setLName] = useState()

  const inputEvent = (event) => {
    setName(event.target.value)
  }

  const anotherEvent = (event) => {
    setLastName(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name)
    setLName(lastName)
  }
  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmit}>
          <div>
            <h1>Hello {fullName} {lName}</h1>
            <input type='text' placeholder='Enter Your Name' onChange={inputEvent} value={name} />
            <input type='text' placeholder='Enter Your Last Name' onChange={anotherEvent} value={lastName}/>
            <button type='submit'>Submit Me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
