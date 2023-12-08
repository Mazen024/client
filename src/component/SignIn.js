import React, { useState } from "react";
import "../Login.css"; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"; // Import axios for making HTTP requests

function SignInScreen() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const usernameHandler = (value) => {
    setUsername(value);
  };

  const passwordHandler = (value) => {
    setPassword(value);
  };

  const confirmPasswordHandler = (value) => {
    setConfirmPassword(value);
  };

  const emailHandler = (value) => {
    setEmail(value);
  };

  const phoneNumberHandler = (value) => {
    setPhoneNumber(value);
  };

  const AgeHandler = (value) => {
    setAge(value);
  };

  const countryHandler = (value) => {
    setCountry(value);
  };

  const handleSignIn = async (e) => { // Added the async keyword
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/Signin", {
        username: Username,
        password: Password,
        confirmPassword: ConfirmPassword,
        email: Email,
        phoneNumber: PhoneNumber,
        age:age,
        country: country,
      });

      console.log(response.data);
      setErrorMessage('');
      e.target.reset();
      alert('SignUp successful!');

      navigate('/');

    } catch (error) {
      console.error("Error submitting data:", error.response.data.error);
      setErrorMessage(error.response.data.error || 'An error occurred during sign up');
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <label> Username: </label>
      <input
        type="text"
        placeholder="Your Username"
        value={Username}
        onChange={(event) => usernameHandler(event.target.value)}
      />
      <br />

      <label> Password: </label>
      <input
        name="password"
        type="password"
        placeholder="Your Password"
        value={Password}
        onChange={(event) => passwordHandler(event.target.value)}
      />
      <br />

      <label> Confirm Password: </label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={ConfirmPassword}
        onChange={(event) => confirmPasswordHandler(event.target.value)}
      />
      <br />

      <label> Email: </label>
      <input
        type="email"
        placeholder="Your Email"
        value={Email}
        onChange={(event) => emailHandler(event.target.value)}
      />
      <br />

      <label> Phone Number: </label>
      <input
        type="tel"
        placeholder="Your Phone Number"
        value={PhoneNumber}
        onChange={(event) => phoneNumberHandler(event.target.value)}
      />
      <br />
      <label> Country: </label>
      <input
        type="text"
        placeholder="Your country"
        value={country}
        onChange={(event) => countryHandler(event.target.value)}
      />
      <br />
      <label> Your Age: </label>
      <input
        type="text"
        placeholder="Your Age"
        value={age}
        onChange={(event) => AgeHandler(event.target.value)}
      />
      <br />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br />
      <button type="submit" className="inLogIN"> Sign In </button>
      <br></br>
      <h5> Already have an account? </h5>
      <Link to="/login">Login</Link>
    </form>
  );
}

export default SignInScreen;
