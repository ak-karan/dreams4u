import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dreams4u.in/#localbusiness",
    name: "Dreams4u",
    url: "https://dreams4u.in",
    image: "https://dreams4u.in/images/dreams4u.webp",
    telephone: "+91-9717030244",
    email: "info@dreams4u.in",
    priceRange: "Rs. 8,000+",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1361, Bhagat Singh Colony, Sector 4",
      addressLocality: "Ballabgarh, Faridabad",
      addressRegion: "Haryana",
      postalCode: "121004",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Faridabad" },
      { "@type": "Place", name: "Ballabgarh" },
      { "@type": "Place", name: "NIT Faridabad" },
      { "@type": "Place", name: "Badkhal" },
    ],
    sameAs: ["https://dreams4u.in"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      {/* <ScrollToTop /> */}
      {/* Fixed Header */}
      <Header />

      {/* Main Content with padding for header */}
      <main className="grow md:pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
