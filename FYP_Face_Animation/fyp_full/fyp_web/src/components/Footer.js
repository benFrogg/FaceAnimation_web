import React from "react";
import { Button } from "./Documentations/Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Footer placeholder</p>
        <p className="footer-subscription-text">Footer 2 placeholder</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Enter</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/aboutUs">How it works</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Face Mover <i className="fas fa-code-branch fas-fade"></i>
            </Link>
          </div>
          <small className="website-rights">
            Face Mover Pte Ltd &#169; 2022
          </small>
          <div className="social-icons">
            <Link
              to="/"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
