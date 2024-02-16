import React from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div>NotFound</div>

      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default NotFound;
