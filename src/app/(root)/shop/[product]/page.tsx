"use client";
import ImageGridLayout from '@/components/ui/image-grid-layout';
import { useProducts } from '@/context';
import { IProduct, StoreProducts } from '@/types';
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow';
type ProductPageProps = {
    params: { product: string };
  };
export default function ProductPage({params}:ProductPageProps) {
    const fetchProduct = useProducts(
        (state:StoreProducts) => state.fetchProduct,
        shallow
      );
      const loading = useProducts(
        (state:StoreProducts) => state.loading,
        shallow
      );
      useEffect(()=>{
         fetchProduct(+params.product);
      },[params.product,fetchProduct])
      const product: IProduct | null = useProducts(
        (state: StoreProducts) => state.product,
        shallow
      );
    
  return (
      <section className='w-full mt-28'>
        
      {(loading || product === null? <p>loading...</p>:<ImageGridLayout image={product!.image}/>)}
      </section>
  )
}
