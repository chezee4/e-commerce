"use client";
import {
  UserButton,
  SignInButton,
  useAuth,
  useUser,
  SignOutButton,
} from "@clerk/nextjs";
import { LogIn } from "lucide-react";

export default function Header() {
  const {isSignedIn} = useAuth();
  return (
    <header>
      <div>
        {isSignedIn?
        <UserButton
          appearance={{
            elements: {
              userButtonPopoverFooter: {
                display: "none",
              },
              avatarBox: {
                width: "40px",
                height: "40px",
              },
            },
            
          }}
          afterMultiSessionSingleSignOutUrl="/"
          afterSignOutUrl="/"
        />
        :
        <SignInButton>
          <button className=" hover:translate-x-1 transition-all duration-200 ease-linear">
            <LogIn />
          </button>
        </SignInButton>
    }
      </div>
    </header>
  );
}