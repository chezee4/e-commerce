import { create } from "zustand";
import { StoreProducts} from "@/types";



export const useProducts = create<StoreProducts>((set, get) => ({
    products: [],
    product: null,
    visibleProducts: [],
    lastFetch: false,
    loading: false,
    error: null,
    fetchAllProducts: async () => {
        set({loading: true});
        try {
            const res = await fetch("https://fakestoreapi.com/products/");
            if (!res.ok) throw new Error("failed to fetch products");
            const products = await res.json();
            set({products, error: null});
            get().filterProducts(null);
        } catch(e:any) {
            set({error: e.message});
        } finally {
            set({loading: false});
        }
    },
    fetchProduct: async (id:number) => {
        set({loading: true});
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!res.ok) throw new Error("failed to fetch beers");
            set({product: await res.json(), error: null});
        } catch(e:any) {
            set({error: e.message});
        } finally {
            set({loading: false});
        }
    },
    filterProducts: (value) => {
        let elements;
        if (value && typeof value !== "number") {
            elements = get().products.filter(
                ({ price }) => price >= value[0] && price <= value[1]
            );
            set({lastFetch: true});
        } else {
            elements = get().products;
            get().products.length > get().visibleProducts.length && set({lastFetch: false});
        }
        set({visibleProducts: elements});
    },
    searchProduct: (text) => {
        if (text.replace(/\s/g, "").length === 0) {
            set({visibleProducts: get().products});
            get().products.length > get().visibleProducts.length && set({lastFetch: false});
            return;
        }
        const elements = get().products.filter(({ title }) => title.toLowerCase().indexOf(text.toLowerCase()) > -1);
        set({lastFetch: true, visibleProducts: elements});
    }
}));
