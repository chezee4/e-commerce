export interface IProduct {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IСartItems extends IProduct {
  count: number;
}
export interface StoreProducts {
  products: IProduct[];
  product: IProduct | null;
  visibleProducts: IProduct[];
  loading: boolean;
  error: string | null;
  priceRange: number[];
  searchText: string;
  cartItems: IСartItems[];
  value: number;
  setCartItems: (cartItems: IСartItems[]) => void;
  fetchAllProducts: () => Promise<void>;
  fetchProduct: (id: number) => Promise<void>;
  filterProducts: (value: number | number[]) => void;
  searchProduct: (text: string) => void;
  updateProductCount: (id: string) => void;
  applyFilters: () => void;
  addToCart: (id: string, value: number) => void;
  setValue: (value: number) => void;
  toggle: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  remoteCartItem: (id: string) => void;
  changeCurrent: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}
