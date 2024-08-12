import Sidebar from "@/components/Adminecmponents/Sidebar";
import Image from "next/image";
import { profile_icon } from "../assets/assets";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
      <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full  py-3 max-h-[60px] px-12 bg-white  min-h-[6rem] border-4 border-black border-l-0">
            <h3 className="text-black text-3xl font-semibold">Admin Panel</h3>
            <Image
              className="h-[4rem] w-auto border-2 border-black rounded-full  cursor-pointer"
              src={profile_icon}
              alt=""
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
