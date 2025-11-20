import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersPage() {
  const [users, setUsers] = useState([]);

  // Fetch users API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            background: "#222",
            color: "white",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h4>{user.name}</h4>
          <p>Email: {user.email}</p>

          <Link
            to={`/details/${user.id}`}
            style={{
              color: "black",
              background: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UsersPage;
