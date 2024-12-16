import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for showing/hiding password
import { useNavigate } from "react-router-dom"; // For navigation to Sign Up page

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    companyName: "", // For company name (optional in login)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
    navigate("/Home")
  };

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Navigate to Sign Up page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <span onClick={handleSignUpRedirect}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;