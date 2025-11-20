import { Link } from "react-router-dom";

function CardsPage({ users }) {
  return (
    <div style={{ color: "white" }}>
      <h2>User Cards</h2>
<Link to="/" className="btn btn-light mb-3">
  + Add New User
</Link>
      <div className="mt-4">
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              background: "#333",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <h4>{user.name}</h4>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>

            <Link to={`/details/${user.id}`} className="btn btn-light mt-2">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
