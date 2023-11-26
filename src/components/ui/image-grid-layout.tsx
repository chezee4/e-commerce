import React from "react";
import Image from "next/image";
type ImageGridLayoutProps = {
  image: string;
};
export default function ImageGridLayout({ image }: ImageGridLayoutProps) {
  return (
    <div className="flex justify-center mb-9 md:mb-0 md:justify-normal gap-0 md:gap-16 min-w-full md:min-w-[330px] max-w-none md:max-w-max w-full md:w-[clamp(330px,_50%,_100%)] h-auto md:h-[clamp(330px,_52vw,_548px)]">
      <div className=" hidden md:flex flex-col justify-center lg:justify-between  gap-4 ">
        <div className=" max-h-[125px] cursor-pointer ">
          <Image src={image} alt="Image 3" width={125} height={125} className="max-h-[inherit]" />
        </div>
        <div className=" max-h-[125px] cursor-pointer">
          <Image src={image} alt="Image 3" width={125} height={125}  className="max-h-[inherit]" />
        </div>
        <div className=" max-h-[125px] cursor-pointer">
          <Image src={image} alt="Image 3" width={125} height={125}  className="max-h-[inherit]"  />
        </div>
        <div className=" max-h-[125px] cursor-pointer">
          <Image src={image} alt="Image 3" width={125} height={125} className="max-h-[inherit]"  />
        </div>
      </div>
      <div className=" flex justify-center items-center  max-w-fit sm:max-w-none md:max-w-[400px] max-h-none md:max-h-[548px] cursor-pointer">
        <Image src={image} alt="Image 4" width={400} height={548} className="max-h-[inherit]"/>
      </div>
    </div>
  );
}
