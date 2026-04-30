import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Buffer } from "buffer";
import { appRoutes } from "./routes";
import "./index.css";

if (typeof window !== "undefined") {
  window.Buffer = Buffer;
}

const router = createBrowserRouter(appRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
