import "./App.css";
import Home from "./components/Home";
import filter from "./components/icons/filter.svg";
import graph from "./components/icons/graph.svg";
import home from "./components/icons/home.svg";
import plus from "./components/icons/plus.svg";
import settings from "./components/icons/settings.svg";
import Habit from "./components/Habit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={((<Home />))}/>
          <Route path="/Habit" element={<Habit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
