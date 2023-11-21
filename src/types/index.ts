export interface IProduct {
    id: number;
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
    lastFetch: boolean;
    loading: boolean;
    error: string | null;
    fetchAllProducts: () => Promise<void>;
    fetchProduct: (id: number) => Promise<void>;
    filterProducts: (value: number | number[] | null) => void;
    searchProduct: (text: string) => void;
}