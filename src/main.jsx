import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Toaster
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Toaster />
  </div>
);
