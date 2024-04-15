import { useState } from "react"

export type CounterTypes = {
    [key: string]:number;       
}

export const UseCounter = ({minValue, maxValue, initialCount, stepUp, stepDown}:CounterTypes) => {
    const [count, setCount] = useState<number>(initialCount);    
    const increment = () => setCount(count === maxValue ? count : count => count + 1);
    const decrement = () => setCount(count === minValue ? count : count => count - 1);
    const reset = () => setCount(initialCount)
    const isEven = () => count % 2 === 0 ? true : false;
    const addStepUp = () => setCount((count) => (count + stepUp) > maxValue ? count : count + stepUp)
    const decStepDown = () => setCount((count) => (count - stepDown < minValue ? count : count - stepDown))

    return {count, increment, decrement, reset, isEven, addStepUp, decStepDown}
}