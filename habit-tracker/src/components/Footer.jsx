import React from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      {/* home button */}
      <img
        id="home"
        className="image"
        src="/src/icons/home.svg"
        alt="home icon"
      ></img>
      {/* plus button */}
      <img
        id="plus"
        className="image"
        src="/src/icons/plus.svg"
        alt="plus icon"
      ></img>{" "}
      {/* metrics button */}
      <img
        id="graph"
        className="image"
        src="/src/icons/graph.svg"
        alt="graph icon"
      ></img>
    </div>
  );
}
