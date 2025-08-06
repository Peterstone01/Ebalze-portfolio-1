import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
