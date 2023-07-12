import React from "react";

import './TableComponent.css'
import RowComponent from "../row-component/RowComponent";

function TableComponent(props){

    if(props.data.length === 0){
        return (<div style={{paddingLeft:'45%'}}>No Data Found</div>)
    }

    return (
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {
                props.data.map((item)=>(
                    <RowComponent 
                    key={item.year}
                    year={item.year}
                    yearlyInterest={item.yearlyInterest}
                    savingsEndOfYear={item.savingsEndOfYear}
                    totalInterest={item.totalInterest}
                    totalInvested={item.totalInvested}
                />
                ))
            }
            </tbody>
      </table>
    )
}

export default TableComponent;