"use client";
import { useState } from "react";

import { Disclosure } from "@headlessui/react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { motion } from "framer-motion";

import { filter } from "./config/filter";
import { fadeInAnimationVariantsForStatic } from "@/lib/utils";
import { StoreProducts } from "@/types";
import { cn } from "@/lib/utils";

import { useProducts } from "@/context";

export default function Filter() {
  const [priceRange, setPriceRange] = useState<number | number[]>([0, 1000]);
  const filterProducts = useProducts(
    (state: StoreProducts) => state.filterProducts
  );
  return (
    <>
      <motion.div
        className="mx-auto max-w-[380px]  md:max-w-[280px] sm:min-w-[220px] rounded-2xl bg-white p-2 shadow-custom-shadow"
        variants={fadeInAnimationVariantsForStatic}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={cn(
                  "flex w-full justify-between rounded-lg px-4 py-2 text-black text-left text-sm font-medium  hover:bg-[#FFE5D0] focus:outline-none focus-visible:ring focus-visible:ring-[#FFE5D0]  transition-all ease-linear duration-200",
                  { "bg-[#FFE5D0]": open }
                )}
              >
                <span>Category</span>
                <div
                  className={`${
                    open
                      ? "rotate-90 origin-[50%_67%]  transition-all ease-linear duration-200 "
                      : ""
                  } h-5 w-5 text-[#bc8e67] text-[24px]`}
                >
                  {">"}
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className=" text-sm text-gray-500 transition-all  py-2 rounded-md ease-linear duration-200">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={cn(
                          "flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-black hover:bg-[#FFE5D0] focus:outline-none focus-visible:ring focus-visible:ring-[#FFE5D0]  transition-all ease-linear duration-200",
                          { "bg-[#FFE5D0]": open }
                        )}
                      >
                        <span>Women</span>
                        <div
                          className={`${
                            open
                              ? "rotate-90 origin-[50%_67%] transition-all ease-linear duration-200"
                              : ""
                          } h-5 w-5 text-[#bc8e67] text-[24px]`}
                        >
                          {">"}
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900 transition-all  ease-linear duration-200">
                        <ul className="flex flex-col gap-2">
                          {filter.women.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-1 font-medium"
                            >
                              <label className="checkbox-container">
                                <input
                                  className="custom-checkbox"
                                  type="checkbox"
                                />
                                <span className="checkmark"></span>
                              </label>
                              <span className="">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={cn(
                          "flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-black hover:bg-[#FFE5D0] focus:outline-none focus-visible:ring focus-visible:ring-[#FFE5D0] focus-visible:ring-opacity-75 transition-all ease-linear duration-200",
                          { "bg-[#FFE5D0]": open }
                        )}
                      >
                        <span>Men</span>
                        <div
                          className={`${
                            open
                              ? "rotate-90 origin-[50%_67%] transition-all ease-linear duration-200"
                              : ""
                          } h-5 w-5 text-[#bc8e67] text-[24px]`}
                        >
                          {">"}
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900  transition-all ease-linear duration-200">
                        <ul className="flex flex-col gap-2">
                          {filter.men.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-1 font-medium"
                            >
                              <label className="checkbox-container">
                                <input
                                  className="custom-checkbox"
                                  type="checkbox"
                                />
                                <span className="checkmark"></span>
                              </label>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </motion.div>
      <div className=" max-w-[220px] mx-auto mt-10">
        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={setPriceRange}
          allowCross={false}
        />
        <div className="flex justify-between items-center mt-5">
          <span className=" text-sm leading-[150%] text-black">
            {typeof priceRange !== "number" &&
              `Price: ${priceRange[0]}$ - ${priceRange[1]}$`}
          </span>
          <button
            onClick={() => filterProducts(priceRange)}
            className=" text-[17px] p-[1px_10px] text-white rounded-md bg-[#d17a00] transition-all duration-200 ease-linear hover:bg-[#e4921e]"
          >
            Filter
          </button>
        </div>
      </div>
    </>
  );
}
