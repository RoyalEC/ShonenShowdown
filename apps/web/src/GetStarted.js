import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./GetStarted.module.css";

function GetStarted() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = formData;
    console.log(user);
    try {
      const response = await fetch("http://localhost:9001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("authToken", token);
        navigate("/select-fighter");
      } else {
        console.error(`HTTP error! status: ${response.status}`);
        if (
          response.headers.get("content-type") &&
          response.headers.get("content-type").includes("application/json")
        ) {
          const responseBody = await response.json();
          console.error(responseBody);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(`logging in with ${username} and ${password}`);

  // useEffect(() => {
  //   fetch("/get-started")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(data.message);
  //     });
  // }, []);

  console.log(message);

  return (
    <>
      <div className={styles.getStartedContainer}>
        <h1>{message}</h1>
        <img
          src="/transparentlogo.png"
          alt="Shonen Showdown Logo"
          className={styles.logo}
        />
        <h1>Login Your Account</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            Username:
            <input
              type="text"
              required
              name="username"
              value={formData.username || ""}
              onChange={handleChange}
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              required
              onChange={handleChange}
              className={styles.formInput}
            />
          </label>
          <button type="submit" id="Login" className={styles.formButton}>
            Log In
          </button>
        </form>
        <Link to="/create-account" className={styles.signUpLink}>
          Don't have an account? Sign Up Now!
        </Link>
      </div>
    </>
  );
}
export default GetStarted;
