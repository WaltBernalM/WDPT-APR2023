import './App.css';
import OrderList from './components/OrderList'

function App() {
  // const [ state, setState ] = useState('')
  return (
    <div className="App">

      <OrderList/>

      {/* <label>Un input</label> 
      <input value={state} onChange={(e) => {
        setState(e.target.value)
      }} />

      <p> Valor actual de state: {state} </p> */}
    </div>
  );
}

export default App;
