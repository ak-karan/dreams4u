import React from "react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Dreams4u | Website Design Company in Faridabad</title>
        <meta
          name="description"
          content="Contact Dreams4u for website design, web development, SEO, and digital marketing services in Faridabad. Call, email, or send an enquiry today."
        />
        <link rel="canonical" href="https://dreams4u.in/contact" />
      </Helmet>
      <ContactForm />
    </>
  );
}

export default ContactPage;
