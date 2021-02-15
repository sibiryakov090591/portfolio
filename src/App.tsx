import React from 'react';
import './App.css';
import Header from "./blocks/header/Header";
import Hero from "./blocks/hero/Hero";
import Skills from "./blocks/skills/Skills";
import Projects from "./blocks/projects/Projects";
import HireMe from "./blocks/hire-me/HireMe";
import Contacts from "./blocks/contacts/Contacts";
import Footer from "./blocks/footer/Footer";

function App() {
  return (
    <>
        <Header/>
        <Hero/>
        <Skills/>
        <Projects/>
        <HireMe/>
        <Contacts/>
        <Footer/>
    </>
  );
}

export default App;
