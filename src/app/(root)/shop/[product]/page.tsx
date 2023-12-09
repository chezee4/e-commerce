"use client";
import InfoTabs from "@/components/info-tabs";
import MessageLink from "@/components/message-link";
import SimilarItems from "@/components/similar-items";
import ImageGridLayout from "@/components/ui/image-grid-layout";
import QuantityInput from "@/components/ui/quantity-input";

import { Dialog, Transition } from "@headlessui/react";
import Stars from "@/components/ui/stars";
import { useProducts } from "@/context";
import { cn } from "@/lib/utils";
import { IProduct, StoreProducts } from "@/types";
import React, { Fragment, useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { useUser} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
type ProductPageProps = {
  params: { product: string };
};
export default function ProductPage({ params }: ProductPageProps) {
  const {user} = useUser();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const fetchProduct = useProducts(
    (state: StoreProducts) => state.fetchProduct,
    shallow
  );

  const loading = useProducts((state: StoreProducts) => state.loading, shallow);

  useEffect(() => {
    fetchProduct(+params.product);
  }, [params.product, fetchProduct]);

  const handleAddToCart = () => {
    if (!user) {
      router.push('/sign-in');
    } else {
      addToCart(id, value);
      setIsOpen(true);
    }
  };
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
      <svg
        width="140"
        height="140"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2  translate-y-[-50%] translate-x-[-50%] "
      >
        <circle cx="4" cy="12" r="3">
          <animate
            id="spinner_jObz"
            begin="0;spinner_vwSQ.end-0.25s"
            attributeName="r"
            dur="0.75s"
            values="3;.2;3"
          />
        </circle>
        <circle cx="12" cy="12" r="3">
          <animate
            begin="spinner_jObz.end-0.6s"
            attributeName="r"
            dur="0.75s"
            values="3;.2;3"
          />
        </circle>
        <circle cx="20" cy="12" r="3">
          <animate
            id="spinner_vwSQ"
            begin="spinner_jObz.end-0.45s"
            attributeName="r"
            dur="0.75s"
            values="3;.2;3"
          />
        </circle>
      </svg>
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
          <p className=" leading-[165%] text-sm lg:text-[17px]">
            {description}
          </p>
          <div className=" mt-10 mb-14 flex gap-12 items-center">
            <QuantityInput id={id} value={value} className=" hidden mm:block" />
            <button
              className={cn(
                "p-[14px_50px] w-full mm:w-auto lg:p-[15px_60px] bg-[#fad692] text-[13px] lg:text-base font-medium transition-all duration-200 ease-linear hover:bg-[#dcb66e]",
                {
                  " disabled:bg-[#d3b785] disabled:opacity-80":
                    rating.count / 10 <= disabledButton()!,
                }
              )}
              disabled={rating.count / 10 <= disabledButton()!}
              onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-[600px] transform overflow-hidden rounded-2xl bg-white p-10 text-left flex flex-col justify-center items-center shadow-xl transition-all">
                        <Dialog.Title
                          as="h2"
                          className="text-base sm:text-xl text-center font-medium leading-6 text-gray-900"
                        >
                          Operation is successful
                        </Dialog.Title>
                        <div className="mt-4 max-w-[500px] text-center">
                          <p className=" text-sm sm:text-base text-gray-500">
                            Your product has been successfully added to the
                            cart.Hurry up and pick up even more products at a
                            great price!
                          </p>
                        </div>

                        <div className="mt-6 text-center ">
                          <button
                            type="button"
                            className="inline-flex  justify-center rounded-md border border-transparent bg-blue-100 px-6 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => setIsOpen(false)}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          <MessageLink />
          <div className=" mt-5 lg:mt-10">
            <p className="flex gap-3 lg:gap-6">
              <span className=" text-base lg:text-lg leading-[168%]">SKU:</span>{" "}
              <span className=" text-base lg:text-lg leading-[168%] opacity-70">
                {id}
              </span>
            </p>
            <p className="flex gap-3 lg:gap-6">
              <span className=" text-base lg:text-lg leading-[168%]">
                Categories:
              </span>{" "}
              <span className=" text-base lg:text-lg leading-[168%] opacity-70">
                {category}
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <InfoTabs description={description} count={rating.count} />
      </section>
      <section className="w-full mt-20 sm:mt-32">
        <SimilarItems category={category} />
      </section>
    </>
  );
}
