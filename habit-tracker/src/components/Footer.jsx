import React from "react";
import "../Footer.css";
import filter from './icons/filter.svg';
import graph from './icons/graph.svg';
import home from './icons/home.svg';
import plus from './icons/plus.svg';
import settings from './icons/settings.svg';
import {useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function Footer() {
  let navigate = useNavigate();

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


      <form>
        <Button variable="btn btn-link" onClick={() => navigate('/Habit')}>
      <img
        id="plus"
        className="plus-image"
        src={plus}
        alt="plus icon"
      ></img>
      </Button>
      </form>


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
