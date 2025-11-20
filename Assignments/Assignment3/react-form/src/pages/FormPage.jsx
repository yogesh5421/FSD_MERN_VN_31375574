import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ users, setUsers }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      ...form,
    };

    setUsers([...users, newUser]);

    navigate("/cards");
  };

  return (
    <div style={{ color: "white" }}>
      <h2>Add User</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#222",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <label>City</label>
        <input
          type="text"
          name="city"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <button className="btn btn-light w-100">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
