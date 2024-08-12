import Image from "next/image";
import Header from "@/components/Header";
import Bloglist from "@/components/Bloglist";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <div className="bg-black">
    <Header/>
    <Bloglist/>
    <Footer/>
   </div>
  );
}
