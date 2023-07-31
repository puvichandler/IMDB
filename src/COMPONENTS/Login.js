import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const  navigate = useNavigate();
    const [data, setdata] = useState({
        email: "",
        password: "",
    });
    // to getitems from Register:
    const handlerSumbit = (e)=>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"))
       { (data.email===loggeduser.email && data.password===loggeduser.password)
        ? navigate("/")
        : alert("Please use valid Email & Password")}
    }
  return (
    <div>
        <form onSubmit={handlerSumbit}>
            <h2>LOGIN PAGE</h2>
            <input name='email' value={data.email} onChange={(e)=>{setdata({...data,[e.target.name] : e.target.value})}} type='email' placeholder='EMAIL'></input><br></br>   
            <input name='password' value={data.password} onChange={(e)=>{setdata({...data,[e.target.name] : e.target.value})}} type='password' placeholder='PASSWORD'></input><br></br>
            <button>LOGIN</button><br></br>
            <Link to="/reg">Does Not Have an Account? Register</Link>
        </form>
    </div>
  )
}

export default Login