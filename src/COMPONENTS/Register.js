import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const[data,setdata] = useState({
        name: "",
        email: "",
        password: ""
    });

    // localstorage function:
    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("user" ,JSON.stringify(data));
        navigate("/log")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <h2>REGISTER FORM</h2>
            <input name='name'  value={data.name} 
            onChange={(e)=>{setdata({...data,[e.target.name] : e.target.value})}}
            type='text' placeholder='USERNAME' className='text-center'></input><br></br>
            <input name='email'  value={data.email} 
            onChange={(e)=>{setdata({...data,[e.target.name] : e.target.value})}} type='email' placeholder='EMAIL' className='text-center'></input><br></br>
            <input name='password'  value={data.password} 
            onChange={(e)=>{setdata({...data,[e.target.name] : e.target.value})}} type='password' placeholder='PASSWORD' className='text-center'></input><br></br>
            <button>REGISTER</button> <br></br>
            <Link to="/log">Already Have an Account? Login</Link>
        </form>
    </div>
  )
}

export default Register