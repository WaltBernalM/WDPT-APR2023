import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import TimerB from './components/TimerB';

function App() {
  const [ show, setShow ] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? 'Hide' : 'Show' }
      </button>
      {/* <Counter/> */}
      {show && <Timer/>}
      {show && <TimerB/>}
    </div>
  );
}

export default App;
