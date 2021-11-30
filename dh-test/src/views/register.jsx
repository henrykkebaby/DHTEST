import React from 'react'

function Register(props) {
    return (
        <div className = "registerContainer">
        
        <div className = "fieldBox">
       <h1>Register</h1>
       <input type = "text" placeholder="Email..." onChange={(e) => {props.setLoginEmail(e.target.value)}}/>
       <input  type = "password" placeholder="Password..." onChange={(e) => {props.setLoginPassword(e.target.value)}}/>

       <button onClick = {props.login}>Signup</button>
       </div>
   
     </div>
    )
}

export default Register;
