import React from "react";
import "../AddHabit.css";
import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


export default function AddHabitHeader() {
  let navigate = useNavigate();


  return (
    <div id="header">
      <form>
        <Button variable="btn btn-link" onClick={() => navigate('/')}>
      <p>Back</p>
      </Button>
      </form>      
      <h3 id="header-text">Yoga Habit</h3>
    </div>
  )
};