import React from "react";
import Navbar from "../navbar/navbar";
import loginformgirl from "../Images/loginformgirl.jpg";
import "./form1.css";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Navbar />

      <div className="login-image">
        <img className="login-image" src={loginformgirl} alt="loginformgirl" />
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
                placeholder="Type In Your Email Here"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
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
