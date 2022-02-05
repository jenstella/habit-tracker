import React from "react";
import "../HabitHeader.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AddHabitHeader() {
  let navigate = useNavigate();

  return (
    <div id="header">
      <div id="back-button">
        <form>
          <Button variable="btn btn-link" onClick={() => navigate("/")}>
            <p>Back</p>
          </Button>
        </form>
      </div>
      <div id="header-text">
        <h3>Yoga Habit</h3>
      </div>
    </div>
  );
}
