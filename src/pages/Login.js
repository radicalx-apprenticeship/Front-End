// Add all Login components here in this file
import React, { useRef, useState } from "react";
// CSS Imports
import "../styles/Login/login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import radicalXLogo from "../assets/RadicallX-Black-Logo 1.png";
import eye from "../assets/eye.svg";
import slashEye from "../assets/eye-slash.svg";
import { Button } from "../components";

const Login = () => {
  // State Variables
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();

  // Event Listener
  const togglePassword = (e) => {
    e.preventDefault();
    console.log(`Show Password Clicked!`);
    // toggle icon
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(
        emailRef.current.value,
        passwordRef.current.value,
        rememberMe
      );
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
        <img src={radicalXLogo} alt="RadicalX" className="radicalX-logo"></img>
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
          <div className="password-container">
            <input
              type="password"
              id="password"
              ref={passwordRef}
              name="password"
              placeholder="Password"
              required
            />
            <button className="eye-button" onClick={togglePassword}>
              {/* View Password btn */}
              {showPassword ? (
                <img src={slashEye} alt="" />
              ) : (
                <img src={eye} alt="" />
              )}
            </button>
          </div>
          <br />
          <div>
            <label className="remember-me">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="/some link ...." className="forget-password">
              Forgot password?{" "}
            </a>
          </div>
          <Button className="login-button">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
