import React from 'react';
import './input.css';

const Input = ({ type, name, placeholder, onchange, value }) => {
    return (
        <>
            <div className="boxInput">
                <input
                    className='inputForm'
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onchange}
                />
            </div>
        </>
    );
}

export default Input;
