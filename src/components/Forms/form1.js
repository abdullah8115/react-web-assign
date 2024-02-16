import React from "react";
import Navbar from "../navbar/navbar";

function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <Navbar/>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
