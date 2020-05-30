import React from 'react';

export const BUTTON_TYPE = {
    primary: 'primary',
    secondary: 'secondary',
    outline: 'outline'
};

export const BUTTON_SIZE = {
    small: 'small',
    medium: 'medium',
    large: 'large'
};
const Button = ({children, type, size, clicked, isDisabled = false, isDanger = false}) => {
    const buttonClass = `button button_${type} button_${size} ${isDanger ? `button_${type}_danger` : ''} ${isDisabled ? `button_disabled` : ''}`
    
    return (
        <button className={buttonClass} onClick={e => clicked(e)}>
            {children}
        </button>
    )
};

export default Button;