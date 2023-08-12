import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import axios from "axios";

const ProjectDetailPage = () => {
    const [ project, setProject ] = useState(null)

    const { projectId } = useParams();

    const getOneProject = async () => {
        const oneProject = (await axios.get(`${API_URL}/api/projects/${projectId}`)).data
        setProject(oneProject)
    }


    useEffect(() => {
        getOneProject()
    }, [])


    return (
        <div className="ProjectDetails">
            {
                project && (
                    <>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </>
                )
            }

            {
                project &&
                project.tasks.map(task => (
                    <div className="TaskCard card">
                        <h3>{task.title}</h3>
                        <h4>Description: </h4>
                        <p>{task.description}</p>
                    </div>
                ))
            }

            <Link to="/projects">
                <button>Back to projects</button>
            </Link>
        </div>
    )
}

export default ProjectDetailPage;