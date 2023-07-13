import React from "react";
import { createRoot } from "react-dom/client";
import { TodosProvider, StatusProvider } from "./contexts";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <StatusProvider>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StatusProvider>
);
