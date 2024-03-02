import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import signupformgirl from "../Images/signupformgirl.jpg";
import "./form2.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    // Save data to local storage
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("Account Created");
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

      <div className="login-imgbox2">
        <img
          className="login-image2"
          src={signupformgirl}
          alt="signupformgirl"
        />
      </div>
      <div className="login-container">
        <div className="login-form">
          <span className="fasco-login">FASCO</span>
          <h2>Create a New Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-buttons">
              <button className="google-button">Signup with Google</button>
              <button className="fb-button">Signup with Facebook</button>
            </div>

            <h2 className="or"> - OR -</h2>

            <label>
              Full Name:
              <br />
              <input
                type="text"
                name="fullname"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Type In Your Full Name"
              />
            </label>
            <br />
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
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type In Your Valid Password"
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Your Password"
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

export default SignupForm;

