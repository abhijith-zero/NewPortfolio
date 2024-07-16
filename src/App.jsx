import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
    </div>
  )

}

export default App;