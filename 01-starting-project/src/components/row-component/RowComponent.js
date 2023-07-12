import React from "react";

function RowComponent(props){
    return(
        <tr>
                <td>{props.year}</td>
                <td>{Number(props.savingsEndOfYear).toFixed(2)}</td>
                <td>{Number(props.yearlyInterest).toFixed(2)}</td>
                <td>{Number(props.totalInterest).toFixed(2)}</td>
                <td>{props.totalInvested}</td>
        </tr>
    );
}

export default RowComponent;