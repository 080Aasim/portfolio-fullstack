import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <button className="btn" onClick={scrollToTop}>Back to Top</button>
      <div className="dlink">
        <NavLink className="flink" to="https://x.com/VanitasO8" target="_blank">
          Twitter
        </NavLink>
        <NavLink
          className="flink"
          to="https://www.linkedin.com/feed/"
          target="_blank"
        >
          LinkedIn
        </NavLink>
        <NavLink className="flink" to="mailto:aasim9155@gmail.com">aasim9155@gmail.com</NavLink>
      </div>
    </div>
  );
}

export default Footer;
