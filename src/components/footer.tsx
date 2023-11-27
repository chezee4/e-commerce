import Link from "next/link";
import MessageLink from "./message-link";
import { ArrowRight } from "lucide-react";
import { messages } from "./config/messages";
export default function Footer() {
  return (
    <footer className="w-full mt-10">
          <hr  className="w-full"/>
      <div className="w-full flex justify-between flex-col md:flex-row max-w-[1300px] px-3 mx-auto mb-0 md:mb-4 mt-10">
        <div className="flex flex-col justify-between order-3 md:order-[-1]  my-5 md:my-0">
          <ul className="flex gap-6 flex-col mm:flex-row mb-5 md:mb-0">
            <li>
              <Link href="#">CONTACT</Link>
            </li>
            <li>
              <Link href="#">TERMS OF SERVICES</Link>
            </li>
            <li>
              <Link href="#">SHIPPING</Link>
            </li>
          </ul>
          <p className=" text-xs mm:text-base">
            <span className=" font-bold">© 2023 Chezee.</span> Terms of use{" "}
            <span className=" font-bold">and</span> privacy policy.
          </p>
        </div>
        <div className="max-w-[300px] w-full">
          <div className=" relative w-full  mb-8 ">
            <input
              type="text"
              className=" w-full pl-3 pr-8 py-1 outline-none border-b "
            />
            <ArrowRight size={30} className=" absolute top-1/2 right-0 translate-y-[-50%] cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 justify-start md:justify-end ">
         {messages.map((message,index) =>(
            <Link key={index} href={message.href} target="_blank" className=" group hover:scale-105 transition-all duration-200 ease-linear" aria-label={message.alt}>
                {<message.Icon size={25} className=" stroke-zinc-600  group-hover:stroke-zinc-800 transition-all duration-200 ease-linear"/>}
            </Link>
         ) )}
       </div>
        </div>
      </div>
    </footer>
  );
}
