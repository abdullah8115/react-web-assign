import React, { useState, useContext } from "react";
import Navbar from "../navbar/navbar";
import loginformgirl from "../Images/loginformgirl.jpg";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../User Context/UserContext";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log("Form Data:", formData);
    console.log("User Data:", userData);
  
    const user = userData && userData[formData.email];
    console.log("User found:", user);
  
    if (user && user.password === formData.password) {
      console.log("Login successful");
      alert("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
  };
  
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="login-imgbox1">
        <img
          className="login-image1 "
          src={loginformgirl}
          alt="loginformgirl"
        />
      </div>
      <div className="login-container">
        <div className="login-form">
          <span className="fasco-login">FASCO</span>
          <h2>Log In To Fasco</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-buttons">
              <button type="button" className="google-button">
                Log In with Google
              </button>
              <button type="button" className="fb-button">
                Log In with Facebook
              </button>
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
