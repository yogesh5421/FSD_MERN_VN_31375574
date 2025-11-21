import React, { useEffect, useState } from "react";
import axios from "axios";

function CardsPage() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/user/all");
      setUsers(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/user/delete/${id}`);
      alert("User deleted successfully!");
      getUsers();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>

      {users.map((u) => (
        <div
          key={u._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "300px",
          }}
        >
          <h3>{u.name}</h3>
          <p>Email: {u.email}</p>

          <button onClick={() => deleteUser(u._id)}>Delete</button>
          <a href={`/details/${u._id}`}>
            <button style={{ marginLeft: "10px" }}>Details</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default CardsPage;
