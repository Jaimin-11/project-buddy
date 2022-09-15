import { Link } from "react-router-dom";

import "../reusables/RButton.style.css";

import { ReactComponent as GlobeIcon } from "../../assets/icons/Globe.svg";

// display individual project data, firstly in short and Arrow button leads to view in section
function ProjectItem(props) {

    return (
        <li className="Project-item">
                <p>{props.srNo}.</p>
                <p>{props.data.title}</p>
                <p>{props.data.abstract}</p>    
                <p>{props.data.sDate}</p>
                <p>{props.data.status}</p>
                <p>
                    <a href={props.data.link} target="_blank" rel="noreferrer">
                        <GlobeIcon width={20} height={20} />
                    </a>
                </p>
                <p>
                    <Link to="/viewProject">
                        <button className="r-button">{"->"}</button>
                    </Link>
                </p>
            {/* </span> */}
        </li>
    )
}

export default ProjectItem;