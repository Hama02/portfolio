import React from "react";
import "./footer.css";
import { handleModal } from "../Modal/handleModal";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mohamed</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="footer__link"
              onClick={() => handleModal("grid")}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/benjdira.mohamed/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/BnjHama"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>

          <a
            href="https://github.com/Hama02"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <uil className="bx bxl-github"></uil>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Mohamed BenJdira. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
