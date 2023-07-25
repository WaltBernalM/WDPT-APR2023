function Summary ({tasksCompleted}) {
    return (
        <div>
            <h1>Tareas Completadas: </h1>
            <p className="tasks-completed">{tasksCompleted}</p>
        </div>
    )
}

export default Summary;