"use client";
import InfoTabs from "@/components/info-tabs";
import MessageLink from "@/components/message-link";
import SimilarItems from "@/components/similar-items";
import ImageGridLayout from "@/components/ui/image-grid-layout";
import QuantityInput from "@/components/ui/quantity-input";
import Stars from "@/components/ui/stars";
import { useProducts } from "@/context";
import { cn } from "@/lib/utils";
import { IProduct, StoreProducts } from "@/types";
import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";
type ProductPageProps = {
  params: { product: string };
};
export default function ProductPage({ params }: ProductPageProps) {
  const fetchProduct = useProducts(
    (state: StoreProducts) => state.fetchProduct,
    shallow
  );
  const loading = useProducts((state: StoreProducts) => state.loading, shallow);
  useEffect(() => {
    fetchProduct(+params.product);
  }, [params.product, fetchProduct]);

  const product: IProduct | null = useProducts(
    (state: StoreProducts) => state.product,
    shallow
  );
  const addToCart = useProducts(
    (state: StoreProducts) => state.addToCart,
    shallow
  );
  const value = useProducts((state: StoreProducts) => state.value, shallow);
  const cartItems = useProducts(
    (state: StoreProducts) => state.cartItems,
    shallow
  );
  if (loading || product === null) {
    return (
      <p className=" absolute top-1/2 left-1/2 text-9xl translate-y-[-50%] translate-x-[-50%] text-red-600">
        loading...
      </p>
    );
  }
  const disabledButton = () =>
    cartItems.find((cartItem) => cartItem.id == product.id)?.count;

  const { title, description, price, rating, image, category, id } = product;
  return (
    <>
      <section className="w-full mt-12 sm:mt-28 flex flex-col md:flex-row justify-between gap-x-14">
        <ImageGridLayout image={image} />
        <div className=" md:max-w-[555px] w-full">
          <h2 className=" text-xl lg:text-2xl leading-[134%] mb-6">{title}</h2>
          <span className=" inline-block text-lg lg:text-2xl font-semibold leading-[130%] text-[#896d44] mb-4 lg:mb-7">
            {"$ " + price}
          </span>
          <div className="flex items-center mb-3 lg:mb-5 gap-5">
            <Stars rate={rating.rate} />
            <span className=" hidden mm:inline text-sm leading-[168%]">{`${rating.count} customer review`}</span>
          </div>
          <p className=" leading-[165%] text-sm lg:text-[17px]">{description}</p>
          <div className=" mt-10 mb-14 flex gap-12 items-center">
            <QuantityInput id={id} />
            <button
              className={cn(
                "p-[14px_50px] w-full mm:w-auto lg:p-[15px_60px] bg-[#fad692] text-[13px] lg:text-base font-medium transition-all duration-200 ease-linear hover:bg-[#dcb66e]",
                {
                  " disabled:bg-[#d3b785] disabled:opacity-80":
                    rating.count / 10 <= disabledButton()!,
                }
              )}
              disabled={rating.count / 10 <= disabledButton()!}
              onClick={() => addToCart(id, value)}
            >
              ADD TO CART
            </button>
          </div>
          <MessageLink />
          <div className=" mt-5 lg:mt-10">
            <p className="flex gap-3 lg:gap-6">
              <span className=" text-base lg:text-lg leading-[168%]">SKU:</span>{" "}
              <span className=" text-base lg:text-lg leading-[168%] opacity-70">{id}</span>
            </p>
            <p className="flex gap-3 lg:gap-6">
              <span className=" text-base lg:text-lg leading-[168%]">Categories:</span>{" "}
              <span className=" text-base lg:text-lg leading-[168%] opacity-70">
                {category}
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
      <InfoTabs description={description} count={rating.count}/>
      </section>
      <section className="w-full mt-20 sm:mt-32">
        <SimilarItems category={category}/>
      </section>
    </>
  );
}
