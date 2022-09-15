import { useContext } from "react";

import "./ProjectList.style.css";

import { DataContext } from "../App";
import ProjectItem from "./Project/ProjectItem";

// component to display all project list
function ProjectList(props) {

    const curData = useContext(DataContext);
    return (
        <ul className="Project-list">
            {/* Going through each project data object and passing it to Project item component */}
            {curData.map((proj, index) => (
                <ProjectItem key={proj.key} srNo={index + 1} data={proj} />
            ))}
        </ul>
    )
}

export default ProjectList;