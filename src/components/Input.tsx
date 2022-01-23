import React from 'react';

interface Iinput {
    inputVal: string;
    handleInputChange: any;
}

const Input: React.FC<Iinput> = ({
  inputVal,
  handleInputChange,
}): JSX.Element => (
  <input
    placeholder="Enter userName here"
    type="text"
    value={inputVal}
    onChange={handleInputChange}
  />
);

export default Input;
