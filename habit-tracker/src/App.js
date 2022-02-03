import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Home from './components/Home';
import NextButton from './components/NextButton';
import filter from './components/icons/filter.svg';
import graph from './components/icons/graph.svg';
import home from './components/icons/home.svg';
import plus from './components/icons/plus.svg';
import settings from './components/icons/settings.svg';


function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        {/* <Counter/>
        <NextButton /> */}
    </div>
  );
}

export default App;
