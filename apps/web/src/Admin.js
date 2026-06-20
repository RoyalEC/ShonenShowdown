import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";

function Admin() {
  const [users, setUsers] = useState([]);

  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  useEffect(() => {
    fetch("http://localhost:9001/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const deleteUser = (id) => {
    fetch(`/users/${id}`, { method: "DELETE" }).then(() => {
      // Remove user from state
      setUsers(users.filter((user) => user._id !== id));
    });
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const response = await fetch(`http://localhost:9001/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const user = await response.json();

      // Update the state with the updated user
      setUsers(
        users.map((user) =>
          user._id === id ? { ...user, ...updatedUser } : user
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.Admin}>
      <h1>Admin</h1>
      {users.map((user) => (
        <div key={user._id}>
          {user.username ? <p>{user.username}</p> : <p>No name provided</p>}
          <button onClick={() => deleteUser(user._id)}>Delete</button>
          <button onClick={() => updateUser(user._id, { username: "Newname" })}>
            Update
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
