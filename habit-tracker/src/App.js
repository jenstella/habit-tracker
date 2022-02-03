import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import NextButton from './components/NextButton';

function App() {
  return (
    <div className="App">
        <Header/>
        <Counter/>
        <NextButton />
    </div>
  );
}

export default App;
