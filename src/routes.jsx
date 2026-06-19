import React from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import FaridabadHub from "./faridabad/FaridabadHub";
import FaridabadLocationPage from "./faridabad/FaridabadLocationPage";
import LocalServicePage from "./localSeo/LocalServicePage";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudies from "./pages/CaseStudies";
import SiteMap from "./pages/SiteMap";
import Portfolio from "./components/Portfolio";
import Services from "./service/Services";
import ReactDevelopment from "./service/ReactDevelopment";
import MobilePage from "./service/MobilePage";
import BusinessWebsitePage from "./service/BusinessWebsitePage";
import UIUXPage from "./service/UIUXPage";
import SecurityPage from "./service/SecurityPage";
import AppDevelopment from "./service/AppDevelopment";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

export const appRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-dreams4u", element: <About /> },
      { path: "works", element: <Works /> },
      { path: "faridabad", element: <FaridabadHub /> },
      { path: "faridabad/:areaSlug", element: <FaridabadLocationPage /> },
      { path: ":serviceSlug", element: <LocalServicePage /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "services/react-development", element: <ReactDevelopment /> },
      { path: "services/app-development", element: <AppDevelopment /> },
      { path: "services/mobile-responsive", element: <MobilePage /> },
      { path: "services/business-website", element: <BusinessWebsitePage /> },
      { path: "services/ui-ux", element: <UIUXPage /> },
      { path: "services/website-security", element: <SecurityPage /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "cookies", element: <Cookies /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetail /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "sitemap", element: <SiteMap /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
