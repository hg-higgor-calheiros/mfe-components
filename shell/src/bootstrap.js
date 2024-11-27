import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("_shell_root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
