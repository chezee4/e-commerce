import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

type InfoTabsProps = {
  description: string;
  count:number;
};
export default function InfoTabs({ description,count }: InfoTabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex mt-14 gap-7 sm:gap-20 mb-3 sm:mb-0">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={cn(
                " whitespace-nowrap opacity-60 font-medium  text-sm mmtext-lg md:text-2xl mb-5 sm:mb-10 outline-none relative before:absolute  before:content-['_']  before:-bottom-[45%] sm:before:-bottom-[68%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:left-[50%] before:inline-block before:transition-all before:duration-200 before:ease-linear before:bg-black",
                { "before:w-[100%] opacity-100": selected }
              )}
            >
              Description
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={cn(
                " sm:whitespace-nowrap opacity-60 font-medium text-sm mm:text-lg md:text-2xl mb-5 sm:mb-10 outline-none relative before:absolute  before:content-['_'] before:-bottom-[45%] sm:before:-bottom-[68%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:left-[50%] before:inline-block before:transition-all before:duration-200 before:ease-linear before:bg-black",
                { "before:w-[100%] opacity-100": selected }
              )}
            >
              Aditional information
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={cn(
                "whitespace-nowrap opacity-60 font-medium  text-sm mmtext-lg md:text-2xl mb-5 sm:mb-10 outline-none relative before:absolute  before:content-['_']  before:-bottom-[45%] sm:before:-bottom-[68%] before:h-[2px] before:w-0 before:translate-x-[-50%] before:left-[50%] before:inline-block before:transition-all before:duration-200 before:ease-linear before:bg-black",
                { "before:w-[100%] opacity-100": selected }
              )}
            >
             { `Reviews(${count})`}
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="text-sm sm:text-lg">{description}</Tab.Panel>
        <Tab.Panel className="text-sm sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni
          repellendus consequatur reprehenderit perspiciatis quam alias,
          assumenda vero harum quo nobis eius inventore non ratione expedita
          iure ipsam sunt? Laboriosam.
        </Tab.Panel>
        <Tab.Panel className="text-sm sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni
          repellendus consequatur reprehenderit perspiciatis quam alias,
          assumenda vero harum quo nobis eius inventore non ratione expedita
          iure ipsam sunt? Laboriosam.
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
