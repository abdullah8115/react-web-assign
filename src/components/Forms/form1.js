import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import loginformgirl from "../Images/loginformgirl.jpg";
import "./form1.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));
    
    if (userData && formData.email === userData.email && formData.password === userData.password) {
      console.log("Login successful");
      alert("Login successful");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />

      <div className="login-imgbox1">
        <img className="login-image1 " src={loginformgirl} alt="loginformgirl" />
      </div>
      <div className="login-container">
        <div className="login-form">
          <span className="fasco-login">FASCO</span>
          <h2>Log In To Fasco</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-buttons">
              <button className="google-button">Log In with Google</button>
              <button className="fb-button">Log In with Facebook</button>
            </div>

            <h2 className="or"> - OR -</h2>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type In Your Email Here"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type In Your Valid Password"
              />
            </label>
            <br />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
