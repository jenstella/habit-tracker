import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Home from './components/Home';
import NextButton from './components/NextButton';

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
