import React from 'react';

const DataInput = ({ amount, duration, onAmountChange, onDurationChange, onSubmit, error }) => (
    <div data-test="DataInputComponent" className="dataInputParentContainer">
        <div className="dataInputContainer">
            <input
                className="text-input"
                data-test="amountInput"
                type="text"
                placeholder="Loan Amount"
                value={amount}
                onChange={onAmountChange}
            />
            <input
                className="text-input"
                data-test="durationInput"
                type="text"
                placeholder="Loan Duration"
                value={duration}
                onChange={onDurationChange} />
            <button className="button" onClick={onSubmit}>SUBMIT</button>
        </div>
        <div className="error">{error}</div>
    </div>
);

export default DataInput;