import React from "react";
import "../Calendar.css";


export default function Calendar() {
  return (
    <div>
      <div id="calendar">
        <p className="day">MON<br></br>24</p>
        <p className="day">TUES<br></br>25</p>
        <p className="day">WEDS<br></br>26</p>
        <p className="day">THURS<br></br>27</p>
        <p className="day">FRI<br></br>28</p>
        <p className="day">SAT<br></br>29</p>
        <p className="colored-day">SUN<br></br>30</p>
      </div>
    </div>
  );
}
