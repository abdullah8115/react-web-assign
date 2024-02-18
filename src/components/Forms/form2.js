import React from "react";
import Navbar from "../navbar/navbar";
import signupformgirl from "../Images/signupformgirl.jpg";
import "./form2.css";

function SignupForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Account Created");
  };

  return (
    <>
      <Navbar />

      <div className="login-image">
        <img
          className="login-image"
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

export default SignupForm;
