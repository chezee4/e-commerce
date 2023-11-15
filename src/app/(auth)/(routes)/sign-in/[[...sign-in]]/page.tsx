import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn
  appearance={{
    elements: {
      formButtonPrimary: "your-org-button org-red-button",
    },
  }}
/>;
}