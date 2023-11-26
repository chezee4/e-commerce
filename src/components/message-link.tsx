import { Heart } from "lucide-react"
import { messages } from "./config/messages"
import Link from "next/link"
export default function MessageLink() {
  return (
    <div className="flex items-center gap-4">
       <Heart size={30} className=" cursor-pointer stroke-zinc-600 hover:stroke-red-500 fill-white hover:fill-red-500 transition-all duration-200 ease-linear"/>
       <div className="flex items-center gap-2 pl-5 border-l border-zinc-900 ">
         {messages.map((message,index) =>(
            <Link key={index} href={message.href} target="_blank" className=" group hover:scale-105 transition-all duration-200 ease-linear" aria-label={message.alt}>
                {<message.Icon size={30} className=" stroke-zinc-600  group-hover:stroke-zinc-800 transition-all duration-200 ease-linear"/>}
            </Link>
         ) )}
       </div>
    </div>
  )
}
