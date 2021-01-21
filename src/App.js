import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";

//contents
import Home from "./contents/Home.js";
import About from "./contents/About.js";
import Education from "./contents/Education.js";
import Skills from "./contents/Skills.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
      </div>
    </Router>
  );
}

export default App;
