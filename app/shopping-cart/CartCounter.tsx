"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { addOne, initCounterState, resetCounter, substractOne } from "@/app/store/counter/counterSlice";

interface Props {
  initialCounter?: number;
}

export const CartCounter = ({ initialCounter = 0 }: Props) => {
  // const [counter, setCounter] = useState(initialCounter);

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(addOne());
  };

  const handleDecrement = () => {
    dispatch(substractOne());
  };

  useEffect(()=> {
    dispatch(initCounterState(initialCounter));
  }, [dispatch, initialCounter])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={handleDecrement}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2"
        >
          -1
        </button>
        <button
          onClick={handleIncrement}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2"
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
