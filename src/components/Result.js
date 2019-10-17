import React from 'react';

const Result = ({ monthlyInstallment }) => (
    <div data-test="resultComponent" className="resultContainer">
        <span>Monthly Installment: </span> <span className="currency">{monthlyInstallment} </span>Euros
    </div>
)

export default Result;