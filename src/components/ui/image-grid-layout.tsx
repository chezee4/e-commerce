import React from "react";
import Image from "next/image";
type ImageGridLayoutProps = {
  image: string;
};
export default function ImageGridLayout({ image }: ImageGridLayoutProps) {
  return (
    <div className="flex gap-16">
      <div className=" flex flex-col gap-4">
        <div className=" max-h-[125px]">
          <Image src={image} alt="Image 3" width={125} height={125} className=" h-[revert-layer]" />
        </div>
        <div className=" max-h-[125px]">
          <Image src={image} alt="Image 3" width={125} height={125}  className=" h-[revert-layer]" />
        </div>
        <div className=" max-h-[125px]">
          <Image src={image} alt="Image 3" width={125} height={125}  className=" h-[revert-layer]"  />
        </div>
        <div className=" max-h-[125px]">
          <Image src={image} alt="Image 3" width={125} height={125} className=" h-[revert-layer]"  />
        </div>
      </div>
      <div className=" flex justify-center items-center max-w-[400px] max-h-[548px]">
        <Image src={image} alt="Image 4" width={400} height={548} className="h-[revert-layer]"  />
      </div>
    </div>
  );
}
