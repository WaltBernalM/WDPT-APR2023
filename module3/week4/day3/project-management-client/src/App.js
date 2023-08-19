import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AddProject from './pages/AddProject';
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/projects" element={<ProjectList/>}/>
        <Route path="/projects/:projectId" element={<ProjectDetailPage/>} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage/> } />
      </Routes>
    </div>
  );
}

export default App;
