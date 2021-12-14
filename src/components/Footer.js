import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:saibalaji@outlook.com" className="footer__link">
        saibalaji@outlook.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/sai-b-56257822/"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://twitter.com/couchrishi"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/couchrishi">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://medium.com/@saibalaji4"
          >
            <i class="fab fa-medium"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
