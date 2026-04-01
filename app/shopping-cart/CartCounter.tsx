'use client'
import { useState } from "react";

interface Props {
  initialCounter?: number;
}

export const CartCounter = ({initialCounter = 0}: Props) => {
  const [counter, setCounter] = useState(initialCounter);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => {
        if (prev === 0) return prev;
        return prev - 1;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button onClick={handleDecrement} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2">
          -1
        </button>
        <button onClick={handleIncrement} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2">
          +1
        </button>
      </div>
    </div>
  );
}

export default CartCounter;
