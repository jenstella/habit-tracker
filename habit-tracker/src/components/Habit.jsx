import React from "react";
import { useState } from "react";
import "../Habit.css";
import NextButton from "./NextButton";
import AddHabitHeader from "./AddHabitHeader";

export default function Habit() {
  // counter
  // set initial count state to 0
  const [count, setCount] = useState(0);
  // increment event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //   decrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // goal period button color
  const [color, setColor] = useState("rgb(223,223,223)");
  const [textColor, setTextColor] = useState("rgb(78,76,73)");

  // time of day button color
  const [timeColor, setTimeColor] = useState("rgb(223,223,223)");
  const [timeTextColor, setTimeTextColor] = useState("rgb(78,76,73)");

  // input form state
  const [input, setInput] = useState("");

  // next button
  // setting state for next page
  const [next, setNext] = useState(0);
  // setting state for current page
  const [currentPage, setCurrentPage] = useState(0);

  // handle the page
  function handlePage(currentPage) {
    // creating variable for the current page + 1 (also the next page)
    let nextPage = currentPage + 1;

    setNext(nextPage);

    return (
      <div>
        <button onClick={handlePage}>Next</button>
      </div>
    );
  }

  return (
    <div>
      <AddHabitHeader />
      {/* goal period - daily/weekly/monthly */}
      <div id="goal-period">
        <p className="goal-text">Goal Period</p>
        <div id="button-container">
          {/* right now when you press a button, they all change -- fix this! */}
          <button
            className="goal-period-button"
            style={{ background: color, color: textColor }}
            onClick={() => {
              setColor("rgb(45,138,178");
              setTextColor("white");
            }}
          >
            Daily
          </button>
          <button
            className="goal-period-button"
            style={{ background: color, color: textColor }}
            onClick={() => {
              setColor("rgb(45,138,178");
              setTextColor("white");
            }}
          >
            Weekly
          </button>
          <button
            className="goal-period-button"
            style={{ background: color, color: textColor }}
            onClick={() => {
              setColor("rgb(45,138,178");
              setTextColor("white");
            }}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* times per day counter */}
      <div id="times-per-day">
        <p className="text">How many times per day?</p>
        <button className="count-button" onClick={handleDecrement}>
          -
        </button>
        <p className="number">{count}</p>
        <button className="count-button" onClick={handleIncrement}>
          +
        </button>
      </div>

      {/* time of day anytime/morning/afternoon/evening */}
      <div id="time-of-day">
        <p className="time-text">Time of Day</p>
        <div id="button-container">
          {/* right now when you press a button, they all change -- fix this! */}
          <button
            className="goal-period-button"
            style={{ background: timeColor, color: timeTextColor }}
            onClick={() => {
              setTimeColor("rgb(45,138,178");
              setTimeTextColor("white");
            }}
          >
            Anytime
          </button>
          <button
            className="goal-period-button"
            style={{ background: timeColor, color: timeTextColor }}
            onClick={() => {
              setTimeColor("rgb(45,138,178");
              setTimeTextColor("white");
            }}
          >
            Morning
          </button>
          <button
            className="goal-period-button"
            style={{ background: timeColor, color: timeTextColor }}
            onClick={() => {
              setTimeColor("rgb(45,138,178");
              setTimeTextColor("white");
            }}
          >
            Afternoon
          </button>
          <button
            className="goal-period-button"
            style={{ background: timeColor, color: timeTextColor }}
            onClick={() => {
              setTimeColor("rgb(45,138,178");
              setTimeTextColor("white");
            }}
          >
            Evening
          </button>
        </div>
      </div>
      {/* start date */}
      <div id="dates">
        <p className="text">Start Date</p>
        <p className="bold-text">May 28</p>
      </div>
      {/* end date */}
      <div id="dates">
        <p className="text">End Date</p>
        <p className="bold-text">None</p>
      </div>
      {/* reminders */}
      <div id="dates">
        <p className="text">Reminders</p>
        <p className="bold-text">5:00pm</p>
      </div>

      {/* input box "Write something to motivate yourself:" */}
      <div id="input section">
        <form id="form">
          <label className="form-text">
            Write something to motivate yourself:
            <br></br>
            <input
              type="text"
              value={input}
              id="input-box"
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </form>{" "}
      </div>

      {/* Next button at bottom of page */}
      <div id="next-button-container">
        <button id="next-button" onClick={handlePage}>
          Next
        </button>
      </div>
    </div>
  );
}
