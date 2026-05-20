import React from "react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Dreams4u | Get a Free Quote for Web Design in Faridabad</title>
        <meta
          name="description"
          content="Contact Dreams4u - Top web design company in Faridabad. Get a free consultation and quote for your website design, development, and digital marketing needs."
        />
        <link rel="canonical" href="https://dreams4u.in/contact" />
      </Helmet>
      <ContactForm />
    </>
  );
}

export default ContactPage;
