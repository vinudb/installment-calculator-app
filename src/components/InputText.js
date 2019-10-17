import React from 'react';

const InputText = ({placeholder, onChange, value})=>(
    <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
);

export default InputText;