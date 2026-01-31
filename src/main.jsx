import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Portfolio from "./components/Portfolio";
import Services from "./service/Services";
import WebDevelopment from "./service/WebDevelopment";
import WebsiteDesign from "./service/WebsiteDesign";
import DigitalMarketing from "./service/DigitalMarketing";
import ReactDevelopment from "./service/ReactDevelopment";
import SEOPage from "./service/SEOPage";
import EcommercePage from "./service/EcommercePage";
import MobilePage from "./service/MobilePage";
import BusinessWebsitePage from "./service/BusinessWebsitePage";
import UIUXPage from "./service/UIUXPage";
import SecurityPage from "./service/SecurityPage";
import MaintenancePage from "./service/MaintenancePage";
import AppDevelopment from "./service/AppDevelopment";
import CustomWebsiteDesign from "./service/CustomWebsiteDesign";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

import "./index.css";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },

      { path: "services", element: <Services /> },
      { path: "services/web-development", element: <WebDevelopment /> },
      { path: "services/website-design", element: <WebsiteDesign /> },
      { path: "services/digital-marketing", element: <DigitalMarketing /> },
      { path: "services/react-development", element: <ReactDevelopment /> },
      { path: "services/app-development", element: <AppDevelopment /> },
      { path: "services/search-engine-optimization", element: <SEOPage /> },
      { path: "services/ecommerce", element: <EcommercePage /> },
      { path: "services/mobile-responsive", element: <MobilePage /> },
      { path: "services/business-website", element: <BusinessWebsitePage /> },
      { path: "services/ui-ux", element: <UIUXPage /> },
      { path: "services/website-security", element: <SecurityPage /> },
      { path: "services/annual-maintenance", element: <MaintenancePage /> },
      {
        path: "services/custom-website-design",
        element: <CustomWebsiteDesign />,
      },

      { path: "blog", element: <BlogList /> },
      { path: "blog/:slug", element: <BlogDetail /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "cookies", element: <Cookies /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
