import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyForm from "./form";
import CardsPage from "./CardsPage";
import Details from "./Details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
