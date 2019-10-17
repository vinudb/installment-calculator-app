import React from 'react';

const DataInput = ({ amount, duration, onAmountChange, onDurationChange, onSubmit }) => (
    <div data-test="DataInputComponent" className="dataInputContainer">
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
);

export default DataInput;