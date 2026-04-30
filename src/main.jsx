import { lazy, Suspense } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
// Home page Single
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FaridabadHub = lazy(() => import("./faridabad/FaridabadHub"));
const FaridabadLocationPage = lazy(() =>
  import("./faridabad/FaridabadLocationPage"),
);
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Services = lazy(() => import("./service/Services"));
const WebDevelopment = lazy(() => import("./service/WebDevelopment"));
const WebsiteDesign = lazy(() => import("./service/WebsiteDesign"));
const DigitalMarketing = lazy(() => import("./service/DigitalMarketing"));
const ReactDevelopment = lazy(() => import("./service/ReactDevelopment"));
const SEOPage = lazy(() => import("./service/SEOPage"));
const EcommercePage = lazy(() => import("./service/EcommercePage"));
const MobilePage = lazy(() => import("./service/MobilePage"));
const BusinessWebsitePage = lazy(() => import("./service/BusinessWebsitePage"));
const UIUXPage = lazy(() => import("./service/UIUXPage"));
const SecurityPage = lazy(() => import("./service/SecurityPage"));
const MaintenancePage = lazy(() => import("./service/MaintenancePage"));
const AppDevelopment = lazy(() => import("./service/AppDevelopment"));
const CustomWebsiteDesign = lazy(() => import("./service/CustomWebsiteDesign"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DebugBlogs = lazy(() => import("./pages/DebugBlogs"));

import "./index.css";
import { Buffer } from "buffer"; window.Buffer = Buffer;
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "about", element: <About /> },
      { path: "faridabad", element: <FaridabadHub /> },
      { path: "faridabad/:areaSlug", element: <FaridabadLocationPage /> },
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

      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "cookies", element: <Cookies /> },

      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetail /> },

      { path: "debug-blogs", element: <DebugBlogs /> },
      { path: "debug-blogs/:slug?", element: <DebugBlogs /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* ✅ Suspense MUST for lazy loading */}
      <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);
