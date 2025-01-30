import React from "react";
import { Container } from "@mui/material";
import Header from "../Components/ExampleHome/Header";
import Banner from "../Components/ExampleHome/Banner";
import AboutUs from "../Components/ExampleHome/AboutUs";
import Features from "../Components/ExampleHome/Features";
import Contact from "../Components/ExampleHome/Contact";
import Footer from "../Components/ExampleHome/Footer";
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
