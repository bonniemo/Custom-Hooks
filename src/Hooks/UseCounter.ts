import { useState } from "react"

export type CounterTypes = {
    [key: string]:number;       
}

export const UseCounter = ({minValue, maxValue, initialCount}:CounterTypes) => {
    const [count, setCount] = useState<number>(initialCount);       
    const increment = (num:number) => setCount(count + num > maxValue ? count : c => c + num)
    const decrement = (num: number) => setCount(count - num < minValue ? count : c => c - num);
    const reset = () => setCount(initialCount)
    const isEven = () => count % 2 === 0 ? true : false;

    return {count, increment, decrement, reset, isEven}
}