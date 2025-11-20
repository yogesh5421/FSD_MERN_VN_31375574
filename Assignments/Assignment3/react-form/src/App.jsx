import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FormPage from "./pages/FormPage";
import CardsPage from "./pages/CardsPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: "#111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "700px" }}>
          <Routes>
            <Route path="/" element={<FormPage users={users} setUsers={setUsers} />} />
            <Route path="/cards" element={<CardsPage users={users} />} />
            <Route path="/details/:id" element={<DetailsPage users={users} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
