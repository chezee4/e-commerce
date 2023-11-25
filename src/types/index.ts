export interface IProduct {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export interface StoreProducts  {
    products: IProduct[];
    product: IProduct | null;
    visibleProducts: IProduct[];
    loading: boolean;
    error: string | null;
    priceRange: number[];
    searchText: string;
    fetchAllProducts: () => Promise<void>;
    fetchProduct: (id: number) => Promise<void>;
    filterProducts: (value: number | number[]) => void;
    searchProduct: (text: string) => void;
    applyFilters: () => void;
}