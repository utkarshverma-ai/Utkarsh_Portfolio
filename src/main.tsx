import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply the saved color theme before first paint to avoid a flash of the
// default theme. The ThemeSwitcher keeps this in sync afterwards.
const savedTheme = localStorage.getItem("portfolio-theme") || "violet";
document.documentElement.setAttribute("data-theme", savedTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
