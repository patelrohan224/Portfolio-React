import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import HH from "./components/HH";

import { Element } from 'react-scroll'

function Resume() {

  useEffect(() => {
    // window.location.href = "https://patelrohan224.github.io/rohanpatel/Resume.pdf";
    window.location.href = "https://patelrohan224.github.io/rohanpatel/Rohan Patel (Resume).pdf";
    
  }, []);
  return null;
}


export default function App() {
    
 
  return (
    <>
    
    <Router>
      <Nav />
     
      <audio
        id="music"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Shuffle_A.mp3"
      ></audio>
 
      <Switch>
      <Route path="/" exact>
          <HH />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
    </>
  );
}

