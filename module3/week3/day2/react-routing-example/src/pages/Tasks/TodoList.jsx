import { useEffect, useState } from "react";
import Task from "./task/Task"
import Summary from "./Summary";
import './tasks.css';
import { Link } from "react-router-dom";




// useContext

const ToDoList = (props) => {
    // tasks nos sirve para saber el estado de las tareas en el componente
    const [ tasks, setTasks ] = useState([]);
    // tasksCompleted nos sirve para saber cuantas tareas estan terminadas
    const [ tasksCompleted, setTasksCompleted ] = useState(0);

    useEffect(() => {
        setTasks(props.tasks) 
    }, [props.tasks])


    // const toggleTasks = initialTasks.map(task => ({ ...task, isDone: false }))


    const toggleTaskDone = (id) => {
        const tasksCopy = JSON.parse(JSON.stringify(tasks))

        tasksCopy.forEach(task => {
            console.log('task cppy: ', task);
            if(task._id === id) {
                // task.isDone = task.isDone ? false : true; 
                task.isDone = !task.isDone; 
                
                if(task.isDone) setTasksCompleted(tasksCompleted + 1)
                else if(!task.isDone) setTasksCompleted(tasksCompleted - 1)
            }
        })

        setTasks(tasksCopy)
    }

    return (
        <div>
            <Summary tasksCompleted={tasksCompleted}/>
            <div className="todo-container">
                {
                    tasks.map(task => (
                        <Link to={`/tasks/${task._id}`}>
                            <Task toggleTaskDone={toggleTaskDone}  key={task._id} tarea={task}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default ToDoList;