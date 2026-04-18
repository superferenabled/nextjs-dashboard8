'use client'
import { useAppSelector } from "@/app/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={count + ""}
        subTitle="Pokemones"
        href="/dashboard/counter"
        icon={<IoCartOutline size={50} className="text-emerald-600" />}
      />
    </div>
  );
};

export default WidgetsGrid;
