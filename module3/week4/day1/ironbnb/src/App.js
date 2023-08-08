import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ApartmentPage from './pages/ApartmentPage';
import AddApartment from './pages/AddApartment';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ApartmentPage/>} />
        <Route path="/apartments/new" element={<AddApartment />}/>
      </Routes>
    </div>
  );
}

export default App;
