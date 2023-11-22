import { StoreProducts } from "@/types";
import { createWithEqualityFn } from "zustand/traditional";


export const useProducts = createWithEqualityFn<StoreProducts>((set, get) => ({
    products: [],
    product: null,
    visibleProducts: [],
    loading: false,
    error: null,
    priceRange: [0, Infinity],
    searchText: '',
    fetchAllProducts: async () => {
        set({loading: true});
        try {
            const res = await fetch("https://fakestoreapi.com/products/");
            if (!res.ok) throw new Error("failed to fetch products");
            const products = await res.json();
            set({products, error: null, visibleProducts: products});
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
        const elements = get().products.filter(({ title, price }) => 
            title.toLowerCase().includes(get().searchText.toLowerCase()) &&
            price >= get().priceRange[0] && price <= get().priceRange[1]
        );
        set({visibleProducts: elements});
    }
}));
