"use client";
import React, { useEffect, useState } from "react";
import { useProducts } from "@/context";
import CartProduct from "@/components/cart-product";
import { shallow } from "zustand/shallow";
const CartPage = () => {
  const cartItems = useProducts((state) => state.cartItems, shallow);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotal(total);
  }, [cartItems]);

  return (
    <section className="w-full ">
      <div className=" w-full mt-10 mm:mt-16  md:mt-28">
        <h2 className=" text-3xl font-semibold text-center mb-10">
          Shopping Cart
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8  mt-24 mb-3">
          <ul className="flex flex-col max-w-[700px] m-auto w-full gap-6">
            {cartItems.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                count={item.count}
              />
            ))}
          </ul>
          <div className="w-full max-w-[450px] mx-auto rounded-lg p-5 lg:p-0 bg-[#f3f2f2] lg:bg-transparent">
            <h3 className="text-3xl font-semibold 0 outline-none">
              Cart totals
            </h3>
            <div className="my-10">
              <p className="flex gap-14 items-center justify-between sm:justify-normal pb-10">
                <span className=" font-medium text-base sm:text-lg">SUBTOTAL: </span>
                <span>{`$ ${total.toFixed(2)}`}</span>
              </p>
              <hr />
              <p className=" flex w-full justify-between pt-10">
                <span className=" font-bold  text-base sm:text-lg">TOTAL: </span>
                <span className="font-bold text-lg">{`$ ${(
                  total +
                  (total / 100) * 15
                ).toFixed(2)}`}</span>
              </p>
            </div>
            <button className=" w-full bg-zinc-950 py-3 text-white">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
