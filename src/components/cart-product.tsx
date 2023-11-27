"use client";
import Image from "next/image";
import QuantityInput from "./ui/quantity-input";
import { useProducts } from "@/context";
import { X } from "lucide-react";

type CartProductProps = {
  title: string;
  price: number;
  image: string;
  id: string;
  count: number;
};
 
export default function CartProduct({
  title,
  price,
  image,
  id,
  count,
}: CartProductProps) {
    const { cartItems, changeCurrent,remoteCartItem } = useProducts();
    const item = cartItems.find((item) => item.id === id);
    const totalProductPrice = (item!.count * item!.price).toFixed(2);
  return (
    <li className="flex items-center gap-5 pb-8 border-b  relative">
      <div className=" w-full max-w-[100px]">
        <Image
          src={image}
          width={154}
          height={220}
          priority={true}
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="block lg:flex justify-between pt-5 sm:p-0 w-[75%]">
      <div className="flex flex-col">
        <h2 className=" text-[13px] sm:text-lg lg:text-xl leading-[134%] mb-4">{title.length > 28? `${title.slice(0,28)}...`: title}</h2>
        <span className=" inline-block text-xs sm:text-sm lg:text-lg font-semibold leading-[130%]  text-[#896d44] mb-4 lg:mb-7">
          {"$ " + totalProductPrice}
        </span>
      </div>
      <QuantityInput id={id} value={item!.count} className={"block whitespace-nowrap"} changeCurrent={changeCurrent} />
      </div>
      <button className=" absolute top-0 right-0 " onClick={()=>remoteCartItem(id)}><X size={20}/></button>
    </li>
  );
}
