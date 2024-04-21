import React, { useState, useContext } from "react";
import { UserContext } from "../../User Context/UserContext";
import {useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import signupformgirl from "../Images/signupformgirl.jpg";
import "./Signup.css";

const SignupForm = () => {
  const { userData, saveUserData } = useContext(UserContext);
  console.log(userData, saveUserData)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  
  let data =  localStorage.getItem('userData')
  data = JSON.parse(data)
  console.log("this is local storage data ", data )
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      alert("Passwords do not match.");
      return;
    } 
  
    let isFind = false

    if(data){
      // eslint-disable-next-line array-callback-return
      data.map(function(value, index){
        if (value.email === formData.email) {
          alert("Email already in use. Please use a different email.");
          isFind = true
          // eslint-disable-next-line array-callback-return
          return;
        }       
      })
    }

if(!isFind){

  saveUserData(formData);
  alert("Your Account Has Been Created...!");
  setTimeout(() => {
    navigate("/form1");
  }, 2000);
}   
};
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
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
              <button type="button" className="google-button">
                Signup with Google
              </button>
              <button type="button" className="fb-button">
                Signup with Facebook
              </button>
            </div>

            <h2 className="or"> - OR -</h2>

            <label>
              Full Name:
              <br />
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Type In Your Full Name"
                required
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
                placeholder="Type In Your Valid Password"
                required
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
                required
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
};

export default SignupForm;
