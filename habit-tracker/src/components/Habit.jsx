import React from "react";
import { useState } from "react";
import "../Habit.css";
import NextButton from "./NextButton";
import AddHabitHeader from "./AddHabitHeader";
import {useNavigate} from 'react-router-dom';

export default function Habit() {

let navigate = useNavigate();

  // counter
  // set initial count state to 0
  // pass this through as props to next page to show Yoga 0/?  +  
  // to show how many were selected
  const [count, setCount] = useState(0);
  // increment event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //   decrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // goal period - button color
  // make state for each button -- long way
  // another way to do would be flip logic and say IF x is selected change color -- refine
  const [dailyColor, setDailyColor] = useState("rgb(223,223,223)");
  const [dailyTextColor, setDailyTextColor] = useState("rgb(78,76,73)");
  const [weeklyColor, setWeeklyColor] = useState("rgb(223,223,223)");
  const [weeklyTextColor, setWeeklyTextColor] = useState("rgb(78,76,73)");
  const [monthlyColor, setMonthlyColor] = useState("rgb(223,223,223)");
  const [monthlyTextColor, setMonthlyTextColor] = useState("rgb(78,76,73)");

  // time of day button color
  // another way to do would be flip logic and say IF x is selected change color -- refine
  const [anytimeColor, setAnytimeColor] = useState("rgb(223,223,223)");
  const [anytimeTextColor, setAnytimeTextColor] = useState("rgb(78,76,73)");
  const [morningColor, setMorningColor] = useState("rgb(223,223,223)");
  const [morningTextColor, setMorningTextColor] = useState("rgb(78,76,73)");
  const [afternoonColor, setAfternoonColor] = useState("rgb(223,223,223)");
  const [afternoonTextColor, setAfternoonTextColor] = useState("rgb(78,76,73)");
  const [eveColor, setEveColor] = useState("rgb(223,223,223)");
  const [eveTextColor, setEveTextColor] = useState("rgb(78,76,73)");

  // input form state
  const [input, setInput] = useState("");

  // next button
  // setting state for next page
  const [next, setNext] = useState(0);
  // setting state for current page
  const [currentPage, setCurrentPage] = useState(0);

  // handle the page
  // pass props through here
  // function handlePage(currentPage) {
  //   // creating variable for the current page + 1 (also the next page)
  //   let nextPage = currentPage + 1;

  //   setNext(nextPage);

  //   return (
  //     <div>
  //       <button onClick={handlePage}>Next</button>
  //     </div>
  //   );
  // }

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
            style={{ background: dailyColor, color: dailyTextColor }}
            onClick={() => {
              setDailyColor("rgb(45,138,178");
              setDailyTextColor("white");
            }}
          >
            Daily
          </button>
          <button
            className="goal-period-button"
            style={{ background: weeklyColor, color: weeklyTextColor }}
            onClick={() => {
              setWeeklyColor("rgb(45,138,178");
              setWeeklyTextColor("white");
            }}
          >
            Weekly
          </button>
          <button
            className="goal-period-button"
            style={{ background: monthlyColor, color: monthlyTextColor }}
            onClick={() => {
              setMonthlyColor("rgb(45,138,178");
              setMonthlyTextColor("white");
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
            style={{ background: anytimeColor, color: anytimeTextColor }}
            onClick={() => {
              setAnytimeColor("rgb(45,138,178");
              setAnytimeTextColor("white");
            }}
          >
            Anytime
          </button>
          <button
            className="goal-period-button"
            style={{ background: morningColor, color: morningTextColor }}
            onClick={() => {
              setMorningColor("rgb(45,138,178");
              setMorningTextColor("white");
            }}
          >
            Morning
          </button>
          <button
            className="goal-period-button"
            style={{ background: afternoonColor, color: afternoonTextColor }}
            onClick={() => {
              setAfternoonColor("rgb(45,138,178");
              setAfternoonTextColor("white");
            }}
          >
            Afternoon
          </button>
          <button
            className="goal-period-button"
            style={{ background: eveColor, color: eveTextColor }}
            onClick={() => {
              setEveColor("rgb(45,138,178");
              setEveTextColor("white");
            }}
          >
            Evening
          </button>
        </div>
      </div>
      {/* start date */}
      <div id="dates">
        <p className="text">Start Date</p>
        <p className="bold-text">May 30</p>
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
        <button id="next-button" onClick={() =>  navigate('/', {state: count})}>
          Next
        </button>
      </div>
    </div>
  );
}

// <form>
// <Button onClick={() => navigate('/Habit')}>
// <img
// id="plus"
// className="plus-image"
// src={plus}
// alt="plus icon"
// ></img>
// </Button>
// </form>
