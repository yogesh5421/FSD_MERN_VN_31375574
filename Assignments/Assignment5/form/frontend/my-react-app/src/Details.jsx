import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:3001/user/all");
      const single = res.data.data.find((u) => u._id === id);

      if (single) {
        setUser({
          name: single.name,
          email: single.email,
          password: "",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/user/update/${id}`, user);
      alert("User updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update User</h2>

      <label>Name:</label>
      <input name="name" value={user.name} onChange={handleChange} />

      <br /><br />
      <label>Email:</label>
      <input name="email" value={user.email} onChange={handleChange} />

      <br /><br />
      <label>New Password:</label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />

      <br /><br />
      <button type="submit">Update</button>
    </form>
  );
}

export default Details;
