import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  // Fetch single user
  const getUser = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>

      <div
        style={{
          background: "#222",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>

        <h3>Address</h3>
        <p>{user.address.street}, {user.address.city}</p>
      </div>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          display: "inline-block",
          background: "white",
          color: "black",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        ⬅ Back to Users
      </Link>
    </div>
  );
}

export default DetailsPage;
