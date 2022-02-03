import './App.css';
import Counter from './components/Counter';
import NextButton from './components/NextButton';

function App() {
  return (
    <div className="App">
        <p>
          Habit Tracker
        </p>
        <Counter/>
        <NextButton />
    </div>
  );
}

export default App;
