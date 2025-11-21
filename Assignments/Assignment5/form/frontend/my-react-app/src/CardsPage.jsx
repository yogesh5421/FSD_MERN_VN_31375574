import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CardsPage.css";

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
    <div className="cards-container">
      <h2>All Users</h2>

      <div className="cards-grid">
        {users.map((u) => (
          <div key={u._id} className="user-card">
            <h3>{u.name}</h3>
            <p>Email: {u.email}</p>

            <button className="card-btn delete-btn" onClick={() => deleteUser(u._id)}>
              Delete
            </button>

            <a href={`/details/${u._id}`}>
              <button className="card-btn details-btn">Details</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
