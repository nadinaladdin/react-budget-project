import React from 'react';
import PropTypes from 'prop-types';


const Input = ({placeholder, defaultValue, changed}) => {
    return (
        <input className="input" type="text" placeholder={placeholder} defaultValue={defaultValue} onChange={e => changed(e.target.value)}/>
    )
};

Input.propTypes = {
    placeholder: PropTypes.string,
    changed: PropTypes.func
};

export default Input;