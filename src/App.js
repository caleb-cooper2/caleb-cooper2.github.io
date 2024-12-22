// File: src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;