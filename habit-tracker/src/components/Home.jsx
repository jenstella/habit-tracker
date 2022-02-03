import React from "react";
import Footer from "./Footer";
import "../Home.css";
import Calendar from "./Calendar";

export default function Home() {
  return (
    <div>
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
