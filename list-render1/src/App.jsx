import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const initialValues={
    name:"",
    email:"",
    pass:"",
  }
const[formvalue,setFormvalue]=useState(initialValues);
const[formErros,setFormErrors]=useState({})
console.log(formErros);
console.log(formvalue);

const handleChange=(event)=>{
  // console.log(event.target.value);
  // console.log(event.target. target.name);

  setFormvalue({
    ...formvalue,
    [event.target.name]:event.target.value
  })
}

const handleSubmit=(event)=>{
  event.prevrntDefault()
  setFormErrors(validate(formvalue))
}

function validate(values){
  const errors={}
  if(!values.name){
    errors.name="Name is required"
  }
  if(!values.pass){
    errors.pass="Password is required"
  }
  return errors;
}
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-block">
            <label htmlFor="name">Name:</label><br/>
            <input type="text" name="name" id="name" className="form-in" autoComplete="off" onChange={handleChange} value={formvalue.name}/>
            <div>{formErros.name}</div>
          </div>

          <div className="input-block">
            <label htmlFor="email">Email:</label><br/>
            <input type="text" name="email" id="email" className="form-in" autoComplete="off" onChange={handleChange} value={formvalue.email}/>
            <div>{formErros.email}</div>
          </div>

          <div className="input-block">
            <label htmlFor="password">Password:</label><br/>
            <input type="password" name="password" id="password" className="form-in" autoComplete="off" onChange={handleChange} value={formvalue.password} />
          <div>{formErros.password}</div>
          </div>

          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
