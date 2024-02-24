import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
function Login() {

  const [username, setUsername]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate();

  const handleloginAdmin = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/login",{
      "username": username,
      "email": email,
      "password": password
    }).then((response)=> {
       if(response.data.error){
        alert("incorrect username or passowrd")
       }else{
        alert("successfully login");
        // console.log(JSON.stringify(response.data));
        navigate("/home")
       }
    })
  } 
  return (
    <div className='bd'>

      <div className="main">
        <input type="checkbox"  id="clik" aria-hidden="true"/>
        <div className="signup">
            <form>
                <label className='lbl' for="clik" aria-hidden="true">Sign up</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className='inp' type="text" name="txt" placeholder="User name" required=""/>
                <input value={email} onChange={(e) => setEmail(e.target.value)}  className='inp' type="email" name="email" placeholder="Email" required=""/>
                <input password={username} onChange={(e) => setPassword(e.target.value)}  className='inp' type="password" name="pswd" placeholder="Password" required=""/>
                <button className='btn' onClick={handleloginAdmin}>Login</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Login