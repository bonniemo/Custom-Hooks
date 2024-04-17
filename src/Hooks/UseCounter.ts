import { useState } from "react";

export type CounterTypes = {
  [key: string]: number;
};

export const UseCounter = ({
  minValue,
  maxValue,
  initialCount,
}: CounterTypes) => {
  const [count, setCount] = useState<number>(initialCount);
  const increment = (num: number) => {
    if (count + num > maxValue) {
      alert(`Sorry, max value is ${maxValue}`);
    } else {
      setCount((c) => c + num);
    }
  };
  const decrement = (num: number) => {
    if (count - num < minValue) {
      alert(`Sorry, min value is ${minValue}`);
    } else {
      setCount((c) => c - num);
    }
  };
  const reset = () => setCount(initialCount);
  const isEven = () => (count % 2 === 0 ? true : false);

  return { count, increment, decrement, reset, isEven };
};
