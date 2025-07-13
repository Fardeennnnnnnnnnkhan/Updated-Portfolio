import React from "react";
import StarsCanvas from "./Stars";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">
      <StarsCanvas />
      <Header />
      <main className="container mx-auto px-6 py-8 relative z-10">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer/>
        </section>
      </main>
    </div>
  );
}
