import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <ScrollToTop /> */}
      {/* Fixed Header */}
      <Header />

      {/* Main Content with padding for header */}
      <main className="flex-grow pt-16 md:pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
