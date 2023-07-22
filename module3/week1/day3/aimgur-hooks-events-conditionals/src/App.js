import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar isLoggedIn={true}/>
      <div className='layout'>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
