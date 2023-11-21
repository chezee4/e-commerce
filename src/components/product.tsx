import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types";

type ProductProps = Omit<IProduct, 'category' | 'description'>;

export default function Product({ id, image, price, title }: ProductProps) {
  return (
    <div
      className="cursor-pointer bg-black border border-black text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
      key={id}
    >
      <Link href="#">
        {" "}
        <div className=" flex items-center justify-center p-[20px_10px_30px] bg-white rounded-[7px_7px_0_0] border">
          <Image
            src={image}
            alt="Product"
            width={154}
            height={220}
            className=" h-[220px] object-contain"
          />
        </div>
        <div className="p-2 pb-8">
          <h4 className="text-lg  break-words font-normal mb-2 leading-7">{`${title.slice(
            0,
            20
          )}`}</h4>
          <span className="text-lg font-semibold leading-7 capitalize">
            {"$" + price}
          </span>
        </div>
      </Link>
    </div>
  );
}
