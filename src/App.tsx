import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
// import { participantUser } from './utils/db';
import surpriseBox, { surpriseBoxReturn } from './utils/surpriseBox';
import './App.css';

const App: React.FC<{}> = (): JSX.Element => {
  const [inputvalue, setInputVal] = useState<string>('');
  const [{ alreadyExist, winnerMessage, looserMessage }, setMessage] = useState<{
            alreadyExist: boolean;
            winnerMessage: boolean;
            looserMessage: boolean;
        }>({
          alreadyExist: false,
          winnerMessage: false,
          looserMessage: false,
        });

  const setMessageAndClearIt = (
    stateValue: any,
    timer: number,
    setState: React.Dispatch<React.SetStateAction<any>>,
  ): void => {
    setState((previousData: any) => ({
      ...previousData,
      [stateValue]: true,
    }));
    setTimeout(() => {
      setMessage((previousData) => ({
        ...previousData,
        [stateValue]: false,
      }));
    }, timer);
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const surpriseBoxResponse: surpriseBoxReturn = surpriseBox(inputvalue);

    if (surpriseBoxResponse === surpriseBoxReturn.ALREADY_EXISTS) {
      setMessageAndClearIt('alreadyExist', 3000, setMessage);
      setInputVal('');
      return;
    }
    if (surpriseBoxResponse === surpriseBoxReturn.WINNER) {
      setMessageAndClearIt('winnerMessage', 3000, setMessage);
      setInputVal('');
      return;
    }
    setMessageAndClearIt('looserMessage', 3000, setMessage);
    setInputVal('');
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputVal(e.currentTarget.value);
  };

  useEffect(() => {
    console.log('<<<<< ', alreadyExist, winnerMessage, looserMessage);
  }, [alreadyExist, winnerMessage, looserMessage]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          inputVal={inputvalue}
          handleInputChange={handleInputChange}
        />
        <Button text="Submit User" type="submit" />
      </form>
      {alreadyExist && (
        <p style={{ color: 'red' }}>User Already Exists</p>
      )}
      {winnerMessage && (
        <p style={{ color: 'lightgreen' }}>
          Congrants!, You win the Game
        </p>
      )}
      {looserMessage && (
        <p style={{ color: 'orange' }}>
          oops, you loose Better luck next time
        </p>
      )}
    </div>
  );
};

export default App;
