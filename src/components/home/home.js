import React from "react";
import Navbar from "../navbar/navbar";
import blackmansitting from "../Images/blackmansitting.png";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="imgbox1-home">
          <img className="img1-home" src={blackmansitting} alt="blackman-home" />{" "}
        </div>
      </div>
    </>
  );
}

export default Home;