import React, { Component } from 'react';
import propTypes from 'prop-types';

const TextInputGroup = ({label, name, value, placeholder, type,onChange, error}) => {
    return ( 
        <div>
            <label htmlFor='name'>{label}</label>
            <input
            type ={type}
            name = {name}
            placeholder = {placeholder}
            value={value}
            onChange={onChange} 
            />
            <div style={{color:'red'}}>{error}</div>
        </div>
     );
}
 
TextInputGroup.propTypes = {
    label:propTypes.string.isRequired,
    type:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    placeholder:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired
}

export default TextInputGroup;