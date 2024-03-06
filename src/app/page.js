import Navbar from "@/DasComponent/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Welcome to my CMS Dasboard</h1>
      <br />
      <Link href={"/dashboard"} className="border-2 border-blue-500 p-2 rounded hover:bg-blue-300 delay-75 ml-5">Go Dashboard</Link>
    </div>
  );
}
