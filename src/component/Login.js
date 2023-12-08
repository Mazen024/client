import React, { useState } from "react";
import "../Login.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Login({ onToggleScreen }) {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const nameHandler = (value) => {
    setName(value);
  };

  const passHandler = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use axios.post to send a POST request with the user credentials
      const response = await axios.post("http://localhost:9000/Login", {
        username: Name,
        password: Password,
      });

      // Handle the response as needed
      console.log(response.data);  // You can do something with the response if needed
      setErrorMessage('');
      e.target.reset();
      alert('Login successful!');

      // You can perform additional actions based on the response if needed
      navigate('/');

    } catch (error) {
      // Handle errors
      console.error("Error submitting data:", error.response.data.error);
      setErrorMessage(error.response.data.error || 'An error occurred during login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Name : </label>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(event) => {
          nameHandler(event.target.value);
        }}
      />
      <br />
      <label> Password : </label>
      <input
        type="password"
        placeholder="Your Password"
        onChange={(event) => {
          passHandler(event.target.value);
        }}
      />
      <br />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br />
      <button type="submit" className="inLogIN"> Submit </button>
      <br />
      <h5> Need to Create an account? </h5>
      <button className="switchButton" onClick={onToggleScreen}>
        <Link to="/signIn">Sign Up</Link>
      </button>
    </form>
  );
}

export default Login;
