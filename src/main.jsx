import React from "react";
import { createRoot } from "react-dom/client";
import { TodoStateProvider } from "./contexts";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <TodoStateProvider>
    <App />
  </TodoStateProvider>
);
