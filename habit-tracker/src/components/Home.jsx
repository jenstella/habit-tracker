import React from "react";
import Footer from "./Footer";
import "../Home.css";
import Calendar from "./Calendar";
import "../Header.css";
import filter from "./icons/filter.svg";
import graph from "./icons/graph.svg";
import home from "./icons/home.svg";
import plus from "./icons/plus.svg";
import settings from "./icons/settings.svg";

export default function Home(props) {
  return (
    <div>
      <div id="header">
        <img
          className="header-images"
          src={settings}
          alt="settings svg icon"
        ></img>
        <h3>Habit Tracker</h3>
        <img className="header-images" src={filter} alt="filter icon"></img>
      </div>
      <div id="calendar-container">
        <Calendar />
      </div>
      <div id="homeText">
        <div id="tasks">
          {/* put a ternary in here if no tasks ? show text : show */}
          <p>You have not set any habits yet.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
