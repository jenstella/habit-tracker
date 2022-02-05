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
// import Notification from "./Notification";
import Habit from "./Habit";
import { useLocation } from "react-router-dom";

export default function Home(props) {
  const location = useLocation();
  console.log(location.state);

  return location.state > 0 ? (
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


      <div id="home-text-tasks">
        <div id="do-tasks">
          {/* design notification here -- use location.state here */}
          <h3 id="do-task-text">Do yoga</h3>
          <p>TODAY: 0/{location.state}</p>
        </div>
      </div>
      <Footer />
    </div>



  ) : (
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
          <p>You have not set any habits yet.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
