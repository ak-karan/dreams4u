import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Buffer } from "buffer";
import { clientRoutes } from "./clientRoutes";
import "./index.css";

if (typeof window !== "undefined") {
  window.Buffer = Buffer;
}

const router = createBrowserRouter(clientRoutes);
const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes() && window.location.pathname === "/") {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
