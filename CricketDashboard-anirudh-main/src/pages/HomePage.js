import React from "react";
import Header from "../Components/Header";
import Banner from "../Components//Banner";
import AboutUs from "../Components//AboutUs";
import Features from "../Components//Features";
import Contact from "../Components//Contact";
import Footer from "../Components//Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
        <AboutUs />
        <Features />
        <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
