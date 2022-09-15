//       tags: "#html#css#javascript",
//       title: "project_title",
//       sDate: "24-07-2022",
//       fDate: "",
//       status: "cont",
//       abstract: "project abstract",
//       description: "project description",
//       phase: [{ phTitle: "phase title", phFlag: "waiting", phStartDate: "-", phFinishDate: "-" }],
//       link: ""
import { useState } from 'react';

import PhaseInput from './PhaseInput';
import PhaseList from '../Project/PhaseList';

function ProjectForm(props) {

    const [enteredTitle, setTitle] = useState("");
    const [enteredTag, setTag] = useState("");
    const [enteredStartDate, setStartDate] = useState("");
    const [enteredFinishDate, setFinishDate] = useState("");
    const [enteredStatus, setStatus] = useState("N/A");
    const [enteredAbstract, setAbstract] = useState("");
    const [enteredDescription, setDescription] = useState("");
    const [enteredPhases, setPhases] = useState([]);
    const [enteredLink, setLink] = useState("");

    // total phases count to generate individual phase data entry 
    var phasesCount = enteredPhases.length;

    const titleHandler = (event) => setTitle(event.target.value);
    const tagHandler = (event) => setTag(event.target.value);
    const sDateHandler = (event) => setStartDate(event.target.value);
    const fDateHandler = (event) => setFinishDate(event.target.value);
    const statusHandler = (event) => setStatus(event.target.value);
    const abstractHandler = (event) => setAbstract(event.target.value);
    const descriptionHandler = (event) => setDescription(event.target.value);
    const linkHandler = (event) => setLink(event.target.value);

    const phaseEntryHandler = (phaseData) => setPhases((prevState) => [...prevState, phaseData]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const projData = {
            tags: enteredTag,
            title: enteredTitle,
            sDate: enteredStartDate,
            fDate: enteredFinishDate,
            status: enteredStatus,
            abstract: enteredAbstract,
            description: enteredDescription,
            phase: enteredPhases,
            link: enteredLink
        }

        props.onAddProject(projData);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <table>
                <tbody>
                    <tr>
                        <td>Tag:</td>
                        <td><textarea id="tag" rows={1} value={enteredTag} onChange={tagHandler} /></td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td><input id="title" type={'text'} value={enteredTitle} onChange={titleHandler} /></td>
                    </tr>
                    <tr>
                        <td>Start Date:</td>
                        <td><input id="startDate" type={'date'} value={enteredStartDate} onChange={sDateHandler} /></td>
                    </tr>
                    <tr>
                        <td>Finish Date:</td>
                        <td><input id="finishDate" type={'date'} value={enteredFinishDate} onChange={fDateHandler} /></td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>
                            <select id="status" value={enteredStatus} onChange={statusHandler}>
                                <option>N/A</option>
                                <option>In progress</option>
                                <option>Halted</option>
                                <option>Finished</option>
                                <option>Discontinued</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Abstract:</td>
                        <td><textarea id="abstract" rows={2} value={enteredAbstract} onChange={abstractHandler} /></td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><textarea id="description" rows={2} value={enteredDescription} onChange={descriptionHandler} /></td>
                    </tr>
                    <tr>
                        <td>Phases:</td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Phase Name</th>
                                        <th>Phase Status</th>
                                        <th>Start Date</th>
                                        <th>Finish Date</th>
                                        <th>Phase Note</th>
                                    </tr>
                                    <PhaseInput phasesCount={phasesCount} onAddPhase={phaseEntryHandler} />
                                    {enteredPhases.length !== 0 ? enteredPhases.map((ph) => (
                                        <PhaseList
                                            key={ph.key}
                                            phNumber={ph.key}
                                            phName={ph.phName}
                                            phFlag={ph.phFlag}
                                            phStartDate={ph.FinishDate}
                                            phFinishDate={ph.FinishDate}
                                            phNote={ph.phNote} />
                                    )) : ''}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>Link:</td>
                        <td><input id="link" type={'url'} value={enteredLink} onChange={linkHandler} /></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Add Project</button>
        </form>
    )
}

export default ProjectForm;