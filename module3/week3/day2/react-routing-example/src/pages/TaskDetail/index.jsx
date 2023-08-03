import { Link, useParams } from "react-router-dom";

const TaskDetail = () => {
    const params= useParams();

    console.log('params: ', params);

    return (
        <div>
            <h2>Task Details</h2>
            <Link to='/tasks' >Go Back</Link>
        </div>
    )
}

export default TaskDetail;