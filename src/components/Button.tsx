/* eslint-disable react/button-has-type */
import React from 'react';

interface IButton {
    text: String;
    type: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<IButton> = ({ text, type }): JSX.Element => (
  <button type={type}>{text}</button>
);

export default Button;
