import { useState } from "react";

function PhaseInput(props) {

    const [enteredPhName, setPhName] = useState('');
    const [enteredPhFlag, setPhFlag] = useState('N/A');
    const [enteredPhStartDate, setPhStartDate] = useState('');
    const [enteredPhFinishDate, setPhFinishDate] = useState('');
    const [enteredPhNote, setPhNote] = useState('');

    const phNameHandler = (event) => {
        setPhName(event.target.value);
    }
    const phFlagHandler = (event) => {
        setPhFlag(event.target.value);
    }
    const phStartDateHandler = (event) => {
        setPhStartDate(event.target.value);
    }
    const phFinishDateHandler = (event) => {
        setPhFinishDate(event.target.value);
    }
    const phNoteHandler = (event) => {
        setPhNote(event.target.value);
    }

    // bind all data in one object and send to parent Form to add it in phases data
    const addPhase = () => {
        const phaseData = {
            key: props.phasesCount + 1,
            phName: enteredPhName,
            phFlag: enteredPhFlag,
            phStartDate: enteredPhStartDate,
            phFinishDate: enteredPhFinishDate,
            phNote: enteredPhNote
        }
        props.onAddPhase(phaseData);
        setPhName('');
        setPhFlag('N/A');
        setPhStartDate('');
        setPhFinishDate('');
        setPhNote('');
    }
    return (
        <tr>
            <td></td>
            <td>
                <input id="phName" type={'text'} value={enteredPhName} onChange={phNameHandler} />
            </td>
            <td>
                <select id="phFlage" value={enteredPhFlag} onChange={phFlagHandler}>
                    <option>N/A</option>
                    <option>Waiting</option>
                    <option>Done</option>
                </select>
            </td>
            <td>
                <input id="phStartDate" type={'date'} vlaue={enteredPhStartDate} onChange={phStartDateHandler} />
            </td>
            <td>
                <input id="phFinishDate" type={'date'} vlaue={enteredPhFinishDate} onChange={phFinishDateHandler} />
            </td>
            <td>
                <textarea id="phNote" rows={2} value={enteredPhNote} onChange={phNoteHandler} />
            </td>
            <td>
                <button onPointerDown={addPhase}>Add</button>
            </td>
        </tr>
    )
}

export default PhaseInput;