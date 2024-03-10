import Navbar from "@/DasComponent/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black p-20">
      <h1>Welcome to my CMS Dasboard</h1>
      <br />
      <Link href={"/dashboard"} className="border-2 border-blue-500 p-2 rounded hover:bg-blue-300 delay-75 ml-5 text-white">Go Dashboard</Link>
      
      <Image src={"https://res.cloudinary.com/de4xozulb/image/upload/v1710094220/Github-Preview/xbwctallgg4stixtz4w4.jpg"} width={1000} height={600} alt="preview Image" className="mx-auto"/>
    </div>
  );
}
