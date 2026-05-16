import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRoutes from "./routes/AppRoutes";

import { SocketProvider } from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SocketProvider>
      <AppRoutes />
    </SocketProvider>
  </React.StrictMode>
);