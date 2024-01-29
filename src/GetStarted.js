import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GetStarted() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`logging in with ${username} and ${password}`);
  };

  useEffect(() => {
    fetch("/get-started")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  console.log(message);

  return (
    <>
      <div>
        <h1>{message}</h1>
        <img
          src="/transparentlogo.png"
          alt="Shonen Showdown Logo"
          className="logo"
        ></img>
        <Link to="/get-started">
          <h1>Login Your Account</h1>
          <form onSubmit={handleSubmit} className="get-started">
            <label>
              Username:
              <input
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br className="spacingGS"></br>
            <label>
              Password:
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" value="Log In" id="Login">
              Log In
            </button>
            <Link to="/create-account">
              Don't have an account? Sign Up Now!
            </Link>
          </form>
        </Link>
      </div>
    </>
  );
}

export default GetStarted;
