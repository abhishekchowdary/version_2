import React from 'react';
import img3 from "./images/DBS_Logo.jpg";
import "./Login.css";

function Login() {
    
  return (
    <div className='login'>
        <img src={img3} className='login_logo'/>
        <div className="login_container">
            <form>
                <h3>User ID</h3>
                <input type="text" value="User_ID" placeholder='Enter Login ID'/>
                
                <h3>Password</h3>
                <input type="password" value="password" placeholder='Enter Password'/>

                <button type='submit' link="./Home" className='login_signin'>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login