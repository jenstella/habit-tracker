import React from "react";
import "../Header.css";

export default function Header() {
  return (
    <div id="header">
      <img
        id="settings"
        src="/src/icons/settings.svg"
        alt="settings svg icon"
      ></img>
      <h3>Habit Tracker</h3>
      <img id="filter" src="/src/icons/filter.svg" alt="filter icon"></img>
    </div>
  );
}
