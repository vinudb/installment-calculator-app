import React from 'react';
import InputText from './InputText';

const DataInput = ({amount, duration, onAmountChange, onDurationChange, onSubmit}) => (
    <div>
        <InputText 
            placeholder="Loan Amount"
            value={amount}
            onChange={onAmountChange}
        />
        <InputText
            placeholder="Loan Duration"
            value={duration}
            onChange={onDurationChange} />
        <button onClick={onSubmit}>SUBMIT</button>
    </div>
);

export default DataInput;