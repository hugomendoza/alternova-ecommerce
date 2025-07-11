import { useState } from 'react';

interface Props {
  initialValue: number;
}

export const useCounter = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value: number = 1) => {
    setCounter((current) => current + value);
  };

  const decrement = (value: number = 1) => {
    if (counter === 0) return;
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
