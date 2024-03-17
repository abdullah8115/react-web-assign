import React, { useContext } from "react";
import { UserContext } from "../User Context/UserContext";
import Navbar from "../components/navbar/navbar";

function Profile() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <h2>Profile</h2>
      {userData ? (
        <div>
          <p>
            <strong>Full Name:</strong> {userData.fullname}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Password:</strong> {userData.password}
          </p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default Profile;
