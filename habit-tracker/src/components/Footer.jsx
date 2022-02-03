import React from "react";
import "../Footer.css";
import filter from './icons/filter.svg';
import graph from './icons/graph.svg';
import home from './icons/home.svg';
import plus from './icons/plus.svg';
import settings from './icons/settings.svg';

export default function Footer() {
  return (
    <div id="footer">
      {/* home button */}
      <img
        id="home"
        className="home-image"
        src={home}
        alt="home icon"
      ></img>
      {/* plus button => goes to next page (pg5)*/}
      <img
        id="plus"
        className="plus-image"
        src={plus}
        alt="plus icon"
      ></img>{" "}
      {/* metrics button */}
      <img
        id="graph-image"
        className="image"
        src={graph}
        alt="graph icon"
      ></img>
    </div>
  );
}
