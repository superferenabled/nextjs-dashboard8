import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: 'Counter Page',
  description: 'un simple comtadorm'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CartCounter initialCounter={5} />
    </div>
  );
}
