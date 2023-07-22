import { useState } from "react";
import Counter from "./components/Counter";


function App() {
  const [ theme, setTheme ] = useState('light')
  return (
    // <div className="App light"></div>
    // <div className="App dark"></div>
    <div className={"App " + theme}>
      {/* en html plano, se escribiria asi:
      <input maxlength="5" style="background: red"/> */}
      {/* <input maxLength={5} style={ { background: 'red' } } /> */}
      <Counter/>
      <select onChange={ event => setTheme(event.target.value) }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
