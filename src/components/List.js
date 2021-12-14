import React from "react";

export default function List() {
  console.log("Inside s");
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            My Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About me
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            My Work
          </a>
        </li>
      </ul>
    </nav>
  );
}
