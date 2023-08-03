import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ToDoList from './pages/Tasks/TodoList';
import TaskDetail from './pages/TaskDetail';


const initialTasks = [
  {
     _id: "1a",
      name: "Sacar la basura",
      description: "Sacar la basura antes de las 9 am",
      isDone: false
  },
  {
      _id: "2b",
      name: "Entregar reportes de control de calidad",
      description: "Entregar a Tovias los reportes de control de calidad",
      isDone: false
  },
  {
      _id: "3c",
      name: "Pasar inspeccion de salubridad",
      description: "La comisionada Elena Sandoval vendra antes de las 3 p para hacer la inspección de sañubirdad",
      isDone: false
  },
];


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/profile' element={<Profile isLoggedIn={true}/>} />
        <Route path='/tasks' element={ <ToDoList tasks={initialTasks}/>}/>
        <Route path='/tasks/:taskId' element={<TaskDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      
     
    </div>
  );
}

export default App;
