import React from 'react';


interface Button {
    charOfButton?: string;
    onNumberChange?: () => void;
}

const Button: React.FC<Button> = ({ charOfButton, onNumberChange }) => {

    return (
        <button onClick={onNumberChange}>{charOfButton}</button>
    );
};
export default Button;