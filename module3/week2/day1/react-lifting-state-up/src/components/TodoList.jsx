import { useState } from "react";
import Task from "./task/Task"
import Summary from "./Summary";

const initialTasks = [
    {
       _id: "1a",
        name: "Sacar la basura",
        description: "Sacar la basura antes de las 9 am",
    },
    {
        _id: "2b",
        name: "Entregar reportes de control de calidad",
        description: "Entregar a Tovias los reportes de control de calidad",
    },
    {
        _id: "3c",
        name: "Pasar inspeccion de salubridad",
        description: "La comisionada Elena Sandoval vendra antes de las 3 p para hacer la inspección de sañubirdad",
    },
];


const toggleTasks = initialTasks.map(task => ({ ...task, isDone: false }))

// useContext

const ToDoList = () => {
    // tasks nos sirve para saber el estado de las tareas en el componente
    const [ tasks, setTasks ] = useState(toggleTasks);
    // tasksCompleted nos sirve para saber cuantas tareas estan terminadas
    const [ tasksCompleted, setTasksCompleted ] = useState(0);


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
                    tasks.map(task => <Task toggleTaskDone={toggleTaskDone}  key={task._id} tarea={task}/>)
                }
            </div>
        </div>
    )
}


export default ToDoList;