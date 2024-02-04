import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      <div>
        <h1>{message}</h1>
        <img
          src="/transparentlogo.png"
          alt="Shonen Showdown Logo"
          className="logo"
        ></img>
        <Link to="/get-started">
          <h1>Login Your Account</h1>
          <form className="get-started">
            <label>
              Username:
              <input
                type="text"
                required
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password || ""}
                required
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              value="Log In"
              id="Login"
              onClick={handleSubmit}
            >
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
