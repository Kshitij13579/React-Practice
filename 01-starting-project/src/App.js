import React from "react";
import FormComponent from "./components/form-component/FormComponent";
import HeaderComponent from "./components/header-component/HeaderComponent";
import TableComponent from "./components/table-component/TableComponent";


function App() {

  const [yearlyData, setYearlyData] = React.useState([]);

  let showTable = <p style={{paddingLeft:'45%'}}>No Data Present</p>

  const isEmpty = (yearlyData)=>{
    setYearlyData(yearlyData);
  }

  return (
    <div>
      <HeaderComponent/>
      <FormComponent isEmpty={isEmpty}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <TableComponent data={yearlyData}/>
    </div>
  );
}

export default App;
