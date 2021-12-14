import { React, useState, useEffect } from "react";
import reactDom from "react-dom";
import devLogo from "../img/couchrishi.jpg";

export default function Nav(props) {
  console.log(props);

  return (
    <header>
      <div className="logo">
        <img src={devLogo} alt="Image here" />
      </div>
      {/* <button
        className={props.isOpen ? "nav-open" : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={props.handleToggle}
      > */}

      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={props.handleToggle}
      >
        <span className="hamburger"> </span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={props.handleToggle}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className="nav__link"
              onClick={props.handleToggle}
            >
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={props.handleToggle}>
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={props.handleToggle}>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
