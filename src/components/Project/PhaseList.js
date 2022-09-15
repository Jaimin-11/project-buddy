function PhaseList(props) {
    return (
        <tr>
            <td>
                {props.phNumber}
            </td>
            <td>
                {props.phName}
            </td>
            <td>
                {props.phFlag}
            </td>
            <td>
                {props.phFinishDate}
            </td>
            <td>
                {props.phNote}
            </td>
        </tr>
    )
}

export default PhaseList;