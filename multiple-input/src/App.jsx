import { useState } from "react";


const App = () => {

  const [fullName, setFullName] = useState({
    fName : "",
    lName : "",
    email : "",
    phone : ""
  })

  const inputEvent = (event) => {
    // setName(event.target.value)
    console.log(event.target.name)

    // const value = event.target.value;
    // const name = event.target.name

    const {value, name} = event.target;

    setFullName((preValue) =>{
      if(name ==='fName'){
        return{
          fName : value,
          lName : preValue.lName,
          email : preValue.email,
          phone : preValue.phone
        }
      }else if(name === 'lName'){
        return{
          fName : preValue.fName,
          lName : value,
          email : preValue.email,
          phone : preValue.phone
        }
      }else if(name === 'email'){
        return{
          fName : preValue.fName,
          lName : preValue.lName,
          email : value,
          phone : preValue.phone
        }
      }else if(name === 'phone'){
        return{
          fName : preValue.fName,
          lName : preValue.lName,
          email : preValue.email,
          phone : value
        }
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted")
  }

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input type="text" placeholder="Enter Your First Name" name="fName" onChange={inputEvent} value={fullName.fName}></input>
            <input type="text" placeholder="Enter Your Last Name" name="lName" onChange={inputEvent} value={fullName.lName}></input>
            <input type="email" placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email}></input>
            <input type="number" placeholder="Enter Your Mobile" name="phone" onChange={inputEvent} value={fullName.phone}></input>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
