// Add all Login components here in this file
import React, { useRef, useState } from "react";
// CSS Imports
import "../styles/Login/login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import radicalXLogo from "../assets/RadicallX-Black-Logo 1.png";
import { useState } from "react/cjs/react.development";

const Login = () => {
  // State Variables
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  // Event Listener
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  };

  // View Template
  return (
    <div>
      <div className="split left"></div>

      <div className="split right">
        <img src={radicalXLogo} className="radicalX-logo"></img>
        {error && <h3 className="red">{error}</h3>}
        <form className="input-fields" onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <input
            type="email"
            id="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            id="password"
            ref={passwordRef}
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <div>
            <label className="remember-me">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
              />
              Remember me
            </label>
            <a href="/some link ...." className="forget-password">
              Forgot password?{" "}
            </a>
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};
function ShowAndHidePassword(){
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(
        <div className="row">
            <div className="col-sm-3">
                <div className="input-group my-4 mx-4">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
                </div>
                
            </div>
      </div>
      
    )
}

export default Login;
