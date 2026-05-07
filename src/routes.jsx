import React from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FaridabadHub from "./faridabad/FaridabadHub";
import FaridabadLocationPage from "./faridabad/FaridabadLocationPage";
import LocalServicePage from "./localSeo/LocalServicePage";
import Blog from "./pages/Blog";
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
import NotFound from "./pages/NotFound";
import DebugBlogs from "./pages/DebugBlogs";

export const appRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "faridabad", element: <FaridabadHub /> },
      { path: "faridabad/:areaSlug", element: <FaridabadLocationPage /> },
      { path: ":serviceSlug", element: <LocalServicePage /> },
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
];
