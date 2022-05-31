const Rows = ({ row })=> {
    return (
        <tr>
            <td style={row.stocked ? {color: "red"} : {}}>{row.name}</td>
            <td>{row.price}</td>
        </tr>
    );
};

export default Rows;