import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  return (

    
    <div style={styles.container}>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>

      <br />

      <button onClick={() => navigate(-1)}>Go back</button>

    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
};

export default NotFound;
