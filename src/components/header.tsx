"use client";
import {
  UserButton,
  SignInButton,
  useAuth,
} from "@clerk/nextjs";
import { LogIn, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/SHOPPE.svg";
import Link from "next/link";
export default function Header() {
  const { isSignedIn } = useAuth();
  return (
    <header className=" border-b border-[#D8D8D8]">
      <div className="  h-16 max-w-[1300px] px-3 mx-auto flex justify-between items-center">
        <div>
          <Image src={Logo} alt="Logo" className=" border-r" />
        </div>
        <nav className="flex gap-7 items-center">
          <Link href="/" className=" text-lg relative before:absolute  before:content-['_'] before:-bottom-[68%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:left-[50%] w-full before:inline-block before:hover:w-[40px] before:transition-all before:duration-200 before:ease-linear before:bg-black">Shop</Link>
          <div className="flex gap-5 items-center relative  before:absolute before:content-['_'] before:-left-3 before:h-[50%] before:w-[1px] before:bg-black ">
            <div className="inline-block relative w-[inherit] mm:w-auto">
              <input
                placeholder="Search..."
                autoComplete="off"
                name="text"
                type="text"
                className="pl-[35px] pr-[11px] mm:pr-0 h-[35px] text-[15px] border-none text-[#070707] outline-none w-[35px] transition-all duration-200 ease-linear bg-transparent rounded-none mm:rounded-[50px] cursor-pointer focus:w-[150px]  mm:focus:w-[230px]  "
              />
              <button className="absolute w-[35px] h-[35px] top-0 left-0 p-[8px] bg-transparent pointer-events-none">
               <Search size={20}/>
              </button>
            </div>
            <Link href="#"><ShoppingCart size={20}/></Link>
            {isSignedIn ? (
              <UserButton
                appearance={{
                  elements: {
                    userButtonPopoverFooter: {
                      display: "none",
                    },
                    avatarBox: {
                      width: "35px",
                      height: "35px",
                    },
                  },
                }}
                afterMultiSessionSingleSignOutUrl="/"
                afterSignOutUrl="/"
              />
            ) : (
              <SignInButton>
                <button className=" hover:translate-x-1 transition-all duration-200 ease-linear">
                  <LogIn />
                </button>
              </SignInButton>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
