// New Project window which contains Form to take new project data entry
import ProjectForm from "./NewProject/ProjectForm";

import "./NewProject.style.css"

function NewProject(props) {

    const addNewProject = (projData) => {
        const prevData = JSON.parse(localStorage.getItem("data"));
        localStorage.setItem("data", JSON.stringify({...prevData, projData}));
        console.log(prevData);
    }

    return (
        <div className="new-proj-container">
            <ProjectForm onAddProject={addNewProject} />
        </div>
    )
}

export default NewProject;