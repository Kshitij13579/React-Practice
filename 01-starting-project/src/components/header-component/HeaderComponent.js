import React from "react";
import logo from '../../assets/investment-calculator-logo.png';
import './HeaderComponent.css';

function HeaderComponent(){
    return (
        <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    );
}

export default HeaderComponent;