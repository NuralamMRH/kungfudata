import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Render React app first, then load the Framer main bundle so it finds id="main"
const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Inject Framer main bundle after React render — it needs id="main" to be in the DOM
// Using setTimeout(0) ensures the first paint has happened
setTimeout(() => {
  const existing = document.querySelector('script[data-framer-bundle="main"]');
  if (existing) return; // already injected

  const script = document.createElement("script");
  script.type = "module";
  script.async = true;
  script.setAttribute("data-framer-bundle", "main");
  script.setAttribute("fetchpriority", "low");
  script.src = "/framer/script_main.CnpS4C0Y.mjs";
  document.body.appendChild(script);
}, 0);
