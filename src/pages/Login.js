// Add all Login components here in this file
import React from "react";
// CSS Imports
import '../styles/global.css'
import '../styles/Login/login.css'
import { Link } from "react-router-dom";
import radicalXLogo from '../assets/RadicallX-Black-Logo 1.png';

const Login = () => {
  return (
    <div>
      <div class="split left">
      </div>

      <div class="split right">
        <img src={radicalXLogo} className="radicalX-logo"></img>
        <form class="input-fields">
          <h1 className='title'>Login</h1>
          <input type="email" id="email" name="email" placeholder="Email" required /><br />
          <input type="password" id="password" name="password" placeholder="Password" required /><br />
          <div>
            <label className='remember-me'> 
              <input type="checkbox" id="remember" name="remember" value="remember" />Remember me
            </label>
            <a href="/some link ...." className='forget-password'>Forgot password? </a>
          </div>
          <button className='login-button'>Login</button>
        </form>
      </div>
    </div>

  )
}

export default Login;
