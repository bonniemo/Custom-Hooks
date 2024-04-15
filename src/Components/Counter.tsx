import { CounterTypes, UseCounter } from "../Hooks/UseCounter";

const Counter = ({initialCount, minValue, maxValue, stepUp, stepDown}:CounterTypes) => {
  const { count, increment, decrement, reset, isEven, addStepUp, decStepDown } =
    UseCounter({
      minValue,
      maxValue,
      initialCount,
      stepUp,
      stepDown,
    });
  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      {isEven() ? <p>Number is even</p> : <p>Number is uneven</p>}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addStepUp}>Add {stepUp}</button>
      <button onClick={decStepDown}>Remove {stepDown}</button>
    </>
  );
};

export default Counter;
