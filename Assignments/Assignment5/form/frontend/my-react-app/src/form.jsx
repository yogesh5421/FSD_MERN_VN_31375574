import React, { useState } from "react";
import axios from "axios";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/user/create", formData);


      console.log(res.data);
      alert("User Created Successfully!");
      
    
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error(error);
      alert("Error creating user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
      />

      <br /><br />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <br /><br />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
