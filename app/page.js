"use client"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header/>
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
    </>
  );
}
