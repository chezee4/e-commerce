import { useProducts } from "@/context";
import { IProduct, StoreProducts } from "@/types";
import React from "react";
import { shallow } from "zustand/shallow";
import Product from "./product";

type SimilarItemsProps = {
  category: string;
};
export default function SimilarItems({ category }: SimilarItemsProps) {
  const products: IProduct[] = useProducts(
    (state: StoreProducts) => state.visibleProducts,
    shallow
  );
  const similarItems = products
    .filter((product) => product.category === category)
    .slice(0, 3);
  return (
    <>
      <h3 className=" text-xl sm:text-3xl font-medium">Similar Items</h3>
      <div className=" grid-cols-[repeat(1_,_300px)] mt-10 justify-center sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 grid">
        {similarItems.map(({ id, title, image, price }: IProduct, index) => (
          <Product
            key={id}
            title={title}
            image={image}
            price={price}
            id={id}
            index={index}
            link={`/shop/${id}`}
          />
        ))}
      </div>
    </>
  );
}
