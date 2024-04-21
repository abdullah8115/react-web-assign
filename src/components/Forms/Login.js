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

    if (!formData.email || !formData.password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    const existingUser = userData.find((user) => user.email === formData.email);
    if (!existingUser) {
      alert("User not found. Please sign up first.");
      return;
    }

    if (existingUser.password !== formData.password) {
      alert("Invalid password.");
      return;
    }

    alert("Login successful.");
    setTimeout(() => {
      navigate("/"); // Navigate to home page after successful login
    }, 2000);
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
        <img className="login-image1" src={loginformgirl} alt="loginformgirl" />
      </div>
      <div className="login-container">
        <div className="login-form">
          <span className="fasco-login">FASCO</span>
          <div className="login-buttons">
            <button type="button" className="google-button">
              Log In with Google
            </button>
            <button type="button" className="fb-button">
              Log In with Facebook
            </button>
          </div>
          <h2>Log In To Fasco</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type In Your Email Here"
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type In Your Password Here"
                required
              />
            </label>
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
