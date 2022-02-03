import React from "react";
import "../Header.css";
import filter from './icons/filter.svg';
import graph from './icons/graph.svg';
import home from './icons/home.svg';
import plus from './icons/plus.svg';
import settings from './icons/settings.svg';

export default function Header() {
  return (
    <div id="header">
      <img
        className="header-images"
        src={settings}
        alt="settings svg icon"
      ></img>
      <h3>Habit Tracker</h3>
      <img className="header-images" src={filter} alt="filter icon"></img>
    </div>
  );
}
