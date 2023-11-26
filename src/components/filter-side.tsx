"use client";
import { useState } from "react";

import { Disclosure } from "@headlessui/react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { motion } from "framer-motion";
import { filter } from "./config/filter";
import { StoreProducts } from "@/types";
import { cn, fadeInAnimationVariantsForStatic } from "@/lib/utils";
import { Search } from "lucide-react";
import { useProducts } from "@/context";

export default function Filter() {
  const [priceRange, setPriceRange] = useState<number | number[]>([0, 1000]);
  const filterProducts = useProducts(
    (state: StoreProducts) => state.filterProducts
  );
  const searchProduct = useProducts(
    (state: StoreProducts) => state.searchProduct
  );
  const [value, setValue] = useState("");
  const Submit = (e: React.FormEvent) => {
    e.preventDefault();
    searchProduct(value);
  };
  return (
    <motion.aside 
    variants={fadeInAnimationVariantsForStatic}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    className=" w-full md:w-[25%] min-w-[220px]">
      <h3 className=" text-center mb-9 whitespace-nowrap text-4xl font-medium leading-[150%]">
        Shop The Latest
      </h3>
      <div className="mx-auto max-w-[380px] mb-10 md:max-w-[280px] sm:min-w-[220px] rounded-2xl bg-white p-2 shadow-custom-shadow">
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
      </div>
      <div className=" mx-auto relative w-full max-w-[380px] lg:max-w-[280px] mb-8">
        <form onSubmit={Submit}>
          <input
            placeholder="Search..."
            autoComplete="off"
            name="text"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className=" border-b border-white outline-none text-[#303028] p-[10px_30px_10px_20px] w-full transition-all duration-300 ease-linear bg-transparent shadow-[0px_0px_0.5px_0px_#000] cursor-pointer placeholder:text-[#525144]"
          />
          <button
            onClick={() => searchProduct(value)}
            className=" absolute w-[35px] h- right-0 top-1 p-[8px] transition hover:translate-y-[-2px] bg-transparent"
          >
            <Search size={20} />
          </button>
        </form>
      </div>
      <div className=" max-w-[250px] mx-auto mt-10">
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
    </motion.aside>
  );
}
