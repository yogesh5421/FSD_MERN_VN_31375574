import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="page-wrapper">
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
