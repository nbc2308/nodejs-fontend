import instance from "@/configs/axios";
import { IProduct } from "@/interfaces/product";

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await instance.get("/products");
    return response.data;
    // console.log(response.data);
  } catch (error) {
    return [];
  }
};

export const getProductById = async (id: number | string) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (product: IProduct) => {
  try {
    const response = await instance.post(`/products`, product);
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
