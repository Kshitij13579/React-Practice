import React from "react";

import './FormComponent.css';

function FormComponent(props){

  const [currentSavings,setCurrentSavings] = React.useState('');
  const [yearlySavings,setYearlySavings] = React.useState('');
  const [expectedReturn,setExpectedReturn] = React.useState('');
  const [duration,setDuration] = React.useState('');

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    let prevInterest = 0;
    let invested = currentSavings;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      prevInterest += yearlyInterest;
      invested += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: prevInterest,
        totalInvested: invested
      });
    }

    props.isEmpty(yearlyData);
  };

  const onChangeHandler = (identifier,value)=>{
    if(identifier === 'current-savings'){
      setCurrentSavings(value);
    }else if(identifier === 'yearly-savings'){
      setYearlySavings(value);
    }else if (identifier === 'expected-return'){
      setExpectedReturn(value);
    }else if(identifier === 'duration'){
      setDuration(value);
    }
  }

  const SubmitHandler = (event)=>{
    event.preventDefault();

    const userInput = {
      'current-savings':currentSavings,
      'yearly-contribution':yearlySavings,
      'expected-return':expectedReturn,
      'duration':duration
    }
    calculateHandler(userInput);
  }

    return (
        <form className="form" onSubmit={SubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(event) => onChangeHandler('current-savings',event.target.value)} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(event) => onChangeHandler('yearly-savings',event.target.value)}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event) => onChangeHandler('expected-return',event.target.value)}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(event) => onChangeHandler('duration',event.target.value)}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}

export default FormComponent;