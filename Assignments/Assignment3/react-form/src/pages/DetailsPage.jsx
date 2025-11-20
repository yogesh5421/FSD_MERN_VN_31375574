import { useParams, Link } from "react-router-dom";

function DetailsPage({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user)
    return <p style={{ color: "white" }}>User not found</p>;

  return (
    <div
      style={{
        background: "#222",
        color: "white",
        padding: "25px",
        borderRadius: "10px",
      }}
    >
      <h2>User Details</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.city}</p>

      <div className="mt-3">
        <Link to="/" className="btn btn-light w-100">
          ➤ Add Another User
        </Link>
      </div>
    </div>
  );
}

export default DetailsPage;
