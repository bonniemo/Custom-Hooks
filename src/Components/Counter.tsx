import { CounterTypes, UseCounter } from "../Hooks/UseCounter";

const Counter = ({
  initialCount,
  minValue,
  maxValue,
  step,
  stepUp,
  stepDown,
}: CounterTypes) => {
  const { count, increment, decrement, reset, isEven } = UseCounter({
    minValue,
    maxValue,
    initialCount,
    step,
    stepUp,
    stepDown,
  });
  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      {isEven() ? <p>Number is even</p> : <p>Number is uneven</p>}
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => increment(stepUp)}>Add{stepUp}</button>
      <button onClick={() => decrement(stepDown)}>Remove {stepDown}</button>
    </>
  );
};

export default Counter;
