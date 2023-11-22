"use client";
import React, { useEffect } from "react";

import shallow from "zustand/shallow";
import { useProducts } from "@/context";

import Product from "./product";
import { StoreProducts, IProduct } from "@/types";

const ProductList: React.FC = () => {
  const fetchAllProducts = useProducts(
    (state: StoreProducts) => state.fetchAllProducts,
    shallow
  );
  const products: IProduct[] = useProducts(
    (state: StoreProducts) => state.visibleProducts,
    shallow
  );

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className=" grid-cols-[repeat(1_,_300px)] mt-20 justify-center mm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl gap-3 grid ">
      {products.map(({ id, title, image, price }: IProduct, index) => (
        <Product key={id} title={title} image={image} price={price} id={id} index={index} />
      ))}
    </div>
  );
};

export default ProductList;
