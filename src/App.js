import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Dark from "./components/DarkTheme/Dark";
import Work from "./components/Work/Work";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Dark />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
        <Footer />
        <Modal />
      </main>
    </>
  );
};

export default App;
