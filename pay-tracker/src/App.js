import './App.css';
import Hero from './hero.jsx'
import Total from './total.jsx'
import Current from './current.jsx'
import ClockBtn from './button.jsx'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Total/>
      <Current/>
      <ClockBtn/>

    </div>
  );
}

export default App;
