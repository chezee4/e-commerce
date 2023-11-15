import { useHttp } from "@/hooks";

const useShopService = () => {
  const { request } = useHttp();
  const _API = "https://fakestoreapi.com/products/";

  const getAllProducts = async () => await request(`${_API}`);
  const getProduct = async (id:string) => await request(`${_API}${id}`);

  return {
    getAllProducts,
    getProduct,
  };
};

export default useShopService;