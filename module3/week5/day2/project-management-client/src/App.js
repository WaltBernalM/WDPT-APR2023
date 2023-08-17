import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AddProject from './pages/AddProject';
import EditProjectPage from './pages/EditProjectPage';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/projects" element={<ProjectList/>}/>
        <Route path="/projects/:projectId" element={<ProjectDetailPage/>} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage/> } />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
