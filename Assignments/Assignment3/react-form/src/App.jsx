import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import CardsPage from "./pages/CardsPage";
import DetailsPage from "./pages/DetailsPage";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedZones, setSelectedZones] = useState([]);

  return (
    <BrowserRouter>
      <div className="center-wrapper">
        <div className="center-inner">
          <Routes>
            <Route
              path="/"
              element={<FormPage setSelectedZones={setSelectedZones} />}
            />

            <Route
              path="/cards"
              element={<CardsPage selectedZones={selectedZones} />}
            />

            <Route
              path="/details/:zone"
              element={<DetailsPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
