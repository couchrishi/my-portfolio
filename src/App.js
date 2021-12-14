import { React, useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Intro from "./components/Intro.js";
import MyServices from "./components/MyServices.js";
import Aboutme from "./components/Aboutme.js";
import Portfolio from "./components/Portfolio.js";
import Footer from "./components/Footer.js";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prevState) => !prevState);
  };

  useEffect(() => {
    hamburgerOpen
      ? document.body.classList.add("nav-open")
      : document.body.classList.remove("nav-open");

    // return function cleanup() {    //   document.body.classList.remove("nav-open");
    // };
  }, [hamburgerOpen]);

  return (
    <div>
      <Nav isOpen={hamburgerOpen} handleToggle={() => toggleHamburger()} />
      <Intro />
      <MyServices />
      <Aboutme />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
