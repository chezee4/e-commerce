"use client";
import {  StoreProducts} from "../types";
import { createWithEqualityFn } from "zustand/traditional";

export const useProducts = createWithEqualityFn<StoreProducts>((set, get) => ({
  products: [],
  product: null,
  visibleProducts:[],
  loading: false,
  error: null,
  priceRange: [0, Infinity],
  searchText: "",
  value: 1,
  cartItems: [],
  setCartItems: (cartItems) => set({ cartItems }),
  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      if (!res.ok) throw new Error("failed to fetch products");
      const products = await res.json();
      set({ products, error: null, visibleProducts: products });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
  fetchProduct: async (id) => {
    set({ loading: true });
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error("failed to fetch beers");
      set({ product: await res.json(), error: null });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
     !get().products.length && get().fetchAllProducts();
    }
  },
  updateProductCount: (id) => {
    const updatedProducts = get().products.map((product) =>
      product.id === id
        ? {
            ...product,
            rating: { ...product.rating, count: product.rating.count + 1 },
          }
        : product
    );
    set({ products: updatedProducts });
  },
  filterProducts: (value) => {
    if (value && typeof value !== "number") {
      get().priceRange = value;
    }
    get().applyFilters();
  },
  searchProduct: (text) => {
    get().searchText = text;
    get().applyFilters();
  },
  applyFilters: () => {
    const elements = get().products.filter(
      ({ title, price }) =>
        title.toLowerCase().includes(get().searchText.toLowerCase()) &&
        price >= get().priceRange[0] &&
        price <= get().priceRange[1]
    );
    set({ visibleProducts: elements });
  },
  addToCart: (id, value) => {
    const cartItems = get().cartItems;
    const products = get().products;
    const existingItemCart = cartItems.find(
      (cartItem) => cartItem.id === id
    );
    const product = products.find((product) => product.id === id);

    if (existingItemCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, count: cartItem.count + value };
        }
        return cartItem;
      });
      set({ cartItems: updatedCartItems });
    } else if (product) {
      const newCartItems = [...cartItems, { ...product, count: value }];
      set({ cartItems: newCartItems });
    }
    set({value: 1})
  },  
  setValue: (value) => set({ value }),
  toggle: (e: React.MouseEvent<HTMLButtonElement>, id) => { 
    const point = e.currentTarget.textContent;
    const product = get().products.find((product) => product.id === id);
    
    if (point === "-" && get().value > 1) {
      set((state) => ({ value: state.value - 1 }));
    }
    if (point === "+" && get().value <  Math.floor(product!.rating.count /10)) {
      set((state) => ({ value: state.value + 1 }));
    }
  },
  remoteCartItem: (id) => {
    const cartItems = get().cartItems;
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== id
    );
    set({ cartItems: updatedCartItems });
   
  },
  changeCurrent: (e: React.MouseEvent<HTMLButtonElement>,id) =>{
    const point = e.currentTarget.textContent;
    const cartItems = get().cartItems;
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        if (point === "-" && cartItem.count > 1) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        if (point === "+" && cartItem.count < Math.floor(cartItem.rating.count /10)) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
      }
      return cartItem;
    });
    set({ cartItems: updatedCartItems }); 
  
  },

}));
