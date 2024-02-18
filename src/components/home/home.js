import React from "react";
import Navbar from "../navbar/navbar";
import blackmansitting from "../Images/blackmansitting.png";
import whitemansitting from "../Images/whitemansitting.png";
import groupofgirls from "../Images/groupofgirls.png";
import womentryingtodance from "../Images/womentryingtodance.jpg";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-body1">
        <div className="imgbox1-home">
          <img className="img1-b1" src={blackmansitting} alt="blackman-home" />
        </div>

        <div className="imgbox1-horiz">
          <img className="img1-hz1" src={groupofgirls} alt="groupofgirls" />

          <br />

          <h2 className="ultimate">ULTIMATE</h2>
          <h1 className="sale">SALE</h1>
          <h5 className="new-collection"> NEW COLLECTION</h5>

          <button className="button-b1"> SHOP NOW </button>

          <div className="imgbox2-horiz">
            <img
              className="img1-hz2"
              src={womentryingtodance}
              alt="womentryingtodance"
            />
          </div>
        </div>

        <div className="imgbox2-home">
          <img className="img1-b2" src={whitemansitting} alt="whiteman-home" />
        </div>
      </div>
    </>
  );
}

export default Home;
