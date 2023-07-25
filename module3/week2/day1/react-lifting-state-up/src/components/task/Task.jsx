// import React from 'react'; // solo es necesario si el compoente es de 
                           // tipo clase
                           
// props = { title: 'Sacar la basura' }

// para controlar el estado de un componente
// debemos entrar a el funcionamiento interno de React
// para eso usarmos el hook llamado useState


// props = { task : { title: 'nsanjkd', description: 'sajdjasn sas'} }

// pasos para convertir un componente stateful a stateless
// 1.  Quitar la dependencia de useState
// 2. Temporalmente reemplazar las funciones y variables de estado con valores dummy
// 3. Mover el estado al padre

// import { useState } from 'react';

function Task (props) {
    // taskCompleted, setTaskCompleted
    // const toggleTask = () => {
    //     setTaskCompleted(!taskCompleted)
    // }

    return (
        <div className="task-card">
            <div className="task-card-half">
            <h1>{props.tarea.title} </h1>  

            {
                props.tarea.isDone 
                 ? <span>Hecho ✅</span>
                 : <span>pendiente ⌛️</span>
            }
            
            <p>Task Id: {props.tarea._id}</p>
            <h2>Descripcion</h2>
            <p> {props.tarea.description} </p>
    
                <button 
                    className="add" 
                    onClick={() => props.toggleTaskDone(props.tarea._id)} 
                >
                    {
                        props.tarea.isDone 
                        ? <span>Deshacer</span>
                        : <span>Terminar</span>
                    }            
                </button>
            </div>
        </div>
    )
}

export default Task;


// hay 3 formas de declarar funciones en JS
// * funciones flecha
const sum = (a, b) => a + b;
// y con el keyword function hay 2 
// function expression
function rest(a, b) {
   return a-b
}
// function declaration
// eslint-disable-next-line no-unused-vars
const  multiply = function (a, b) {
   return a*b
}


// class Task extends React.Component {
//     render() {
//         return(
//         <div className="task-card">
//             <div className="task-card-half">
//             <h1>{this.props.title} </h1>  
//             <span>pendiente</span>
    
//             <h2>Descripcion</h2>
//             <p> {this.props.description} </p>
    
    
//             <button className="add">
//                 Terminar
//             </button>
//             </div>
//         </div>
//         )
//     }
// }