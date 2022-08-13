import React, { useRef } from "react";
import Home from "./Home";
import img3 from "./images/DBS_Logo.jpg";
import "./Login.css";

function Login() {
  const User_ID = useRef();
  const password = useRef();
  const getUser_ID = localStorage.getItem("User_ID_data");
  const getpassword = localStorage.getItem("password_data");
  const handleSubmit = () => {
    if (User_ID.current.value === "admin" && password.current.value === "admin") {
      localStorage.setItem("User_ID_data", "admin");
      localStorage.setItem("password_data", "admin");
    }
  };

  return (
    <div className="login-form">
      {getUser_ID && getpassword ? <Home /> : 
        <div className="login">
        <form onSubmit={handleSubmit}>
          <img src={img3} className="login_logo" alt="DBS LOGO" />
          <h3>User ID</h3>
          <input
            type="text"
            className="User_ID"
            placeholder="Enter Login ID"
            ref={User_ID}
          />
          <h3>Password</h3>
          <input
            type="password"
            ref={password}
            className="password"
            placeholder="Enter Password"
          />
          <br></br>
          <button type="submit" className="but">
            Login
          </button>
        </form>
        </div>
      }
    </div>
  );
}

export default Login;
