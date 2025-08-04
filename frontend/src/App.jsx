import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import IngredientDetail from "./pages/IngredientDetail";
import OrderSummary from "./pages/OrderSummary";
import { BsSun, BsMoonStars } from "react-icons/bs";
import "./theme.css";

export default function App() {
  // Dark mode state synced with localStorage and system preference
  const [dark, setDark] = useState(() => {
    let pref = window.localStorage.getItem("dark-mode");
    if (pref !== null) return pref === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    window.localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: "1.6rem", color: "var(--primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span role="img" aria-label="restaurant" className="emoji">🍽️</span>
            THE RESTAURANT
          </span>
          <button
            className="darkmode-toggle"
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle dark mode"
          >
            {dark ? <BsSun /> : <BsMoonStars />}
            {dark ? " Light" : " Dark"}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/ingredient/:dishId" element={<IngredientDetail />} />
          <Route path="/order" element={<OrderSummary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
