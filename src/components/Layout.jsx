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
import BlurReveal from "./BlurReveal";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-clip">
      <StarsCanvas />
      <Header />
      <main className="container mx-auto px-6 py-8 relative z-10">
        <section id="home">
          <BlurReveal delay={0.2}>
            <Home />
          </BlurReveal>
        </section>
        <section id="about">
          <BlurReveal delay={0.1}>
            <About />
          </BlurReveal>
        </section>
        <section id="experience">
          <BlurReveal yOffset={70} duration={1}>
            <Experience />
          </BlurReveal>
        </section>
        <section id="projects">
          {/* Projects uses extremely complex native scroll snapping and full-screen pinning. Do not wrap in transform-altering BlurReveal */}
          <Projects />
        </section>
        <section id="skills">
          <BlurReveal blurAmount="20px">
            <Skills />
          </BlurReveal>
        </section>
        <section id="contact">
          <BlurReveal>
            <Contact />
          </BlurReveal>
        </section>
        <section id="footer">
          <Footer/>
        </section>
      </main>
    </div>
  );
}
