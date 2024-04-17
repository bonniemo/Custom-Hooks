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
    count + num > maxValue
      ? alert(`Sorry, max value is ${maxValue}`)
      : setCount((c) => c + num);
  };
  const decrement = (num: number) => {
    count - num < minValue
      ? alert(`Sorry, min value is ${minValue}`)
      : setCount((c) => c - num);
  };
  const reset = () => setCount(initialCount);
  const isEven = () => (count % 2 === 0 ? true : false);
  return { count, increment, decrement, reset, isEven };
};
