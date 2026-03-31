import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect('dashboard/counter')
  // return (
  //   <>
  //     <h1 className="text-3xl">hola mundo</h1>
  //   </>
  // );
}
