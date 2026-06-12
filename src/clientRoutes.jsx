import React, { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Contact = lazy(() => import("./pages/Contact"));
const FaridabadHub = lazy(() => import("./faridabad/FaridabadHub"));
const FaridabadLocationPage = lazy(
  () => import("./faridabad/FaridabadLocationPage"),
);
const LocalServicePage = lazy(() => import("./localSeo/LocalServicePage"));
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
const BusinessWebsitePage = lazy(
  () => import("./service/BusinessWebsitePage"),
);
const UIUXPage = lazy(() => import("./service/UIUXPage"));
const SecurityPage = lazy(() => import("./service/SecurityPage"));
const MaintenancePage = lazy(() => import("./service/MaintenancePage"));
const AppDevelopment = lazy(() => import("./service/AppDevelopment"));
const CustomWebsiteDesign = lazy(
  () => import("./service/CustomWebsiteDesign"),
);
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DebugBlogs = lazy(() => import("./pages/DebugBlogs"));

function deferred(element) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] bg-white" aria-label="Loading page" />
      }
    >
      {element}
    </Suspense>
  );
}

export const clientRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: deferred(<About />) },
      { path: "about-dreams4u", element: deferred(<About />) },
      { path: "works", element: deferred(<Works />) },
      { path: "faridabad", element: deferred(<FaridabadHub />) },
      {
        path: "faridabad/:areaSlug",
        element: deferred(<FaridabadLocationPage />),
      },
      { path: ":serviceSlug", element: deferred(<LocalServicePage />) },
      { path: "portfolio", element: deferred(<Portfolio />) },
      { path: "contact", element: deferred(<Contact />) },
      { path: "services", element: deferred(<Services />) },
      {
        path: "services/web-development",
        element: deferred(<WebDevelopment />),
      },
      {
        path: "services/website-design",
        element: deferred(<WebsiteDesign />),
      },
      {
        path: "services/digital-marketing",
        element: deferred(<DigitalMarketing />),
      },
      {
        path: "services/react-development",
        element: deferred(<ReactDevelopment />),
      },
      {
        path: "services/app-development",
        element: deferred(<AppDevelopment />),
      },
      {
        path: "services/search-engine-optimization",
        element: deferred(<SEOPage />),
      },
      { path: "services/ecommerce", element: deferred(<EcommercePage />) },
      {
        path: "services/mobile-responsive",
        element: deferred(<MobilePage />),
      },
      {
        path: "services/business-website",
        element: deferred(<BusinessWebsitePage />),
      },
      { path: "services/ui-ux", element: deferred(<UIUXPage />) },
      {
        path: "services/website-security",
        element: deferred(<SecurityPage />),
      },
      {
        path: "services/annual-maintenance",
        element: deferred(<MaintenancePage />),
      },
      {
        path: "services/custom-website-design",
        element: deferred(<CustomWebsiteDesign />),
      },
      { path: "privacy", element: deferred(<Privacy />) },
      { path: "terms", element: deferred(<Terms />) },
      { path: "cookies", element: deferred(<Cookies />) },
      { path: "blog", element: deferred(<Blog />) },
      { path: "blog/:slug", element: deferred(<BlogDetail />) },
      { path: "debug-blogs", element: deferred(<DebugBlogs />) },
      { path: "debug-blogs/:slug?", element: deferred(<DebugBlogs />) },
      { path: "*", element: deferred(<NotFound />) },
    ],
  },
];
