import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsDynamic } from "@/lib/utils";
import { IProduct } from "@/types";

type ProductProps = Omit<IProduct, 'category' | 'description' | 'rating'> & {
  index: number;
  link:string;
};

export default function Product({ id, image, price, title, index, link }: ProductProps) {
  return (
    <motion.div
      className="cursor-pointer bg-zinc-800 border border-zinc-500 text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
      variants={fadeInAnimationVariantsDynamic}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      key={id}
    >
      <Link href={link}>
        {" "}
        <div className=" flex items-center justify-center p-[20px_10px_30px] bg-white rounded-[7px_7px_0_0] border">
          <Image
            src={image}
            alt="Product"
            width={154}
            height={220}
            className=" h-[220px] object-contain"
            priority={true}
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
    </motion.div>
  );
}
