import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.scss";
import App from "./pages/App.jsx";
import Err404 from "./pages/Err404.jsx";
import DeckGrid from "./pages/DeckGrid.jsx";
import SubDeckGrid from "./pages/SubDeckGrid.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeckGrid />} />
        <Route path="/echo" element={<DeckGrid />} />
        <Route path="/:deckId" element={<SubDeckGrid />} />
        <Route path="/:deckId/:subDeckId" element={<App />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
