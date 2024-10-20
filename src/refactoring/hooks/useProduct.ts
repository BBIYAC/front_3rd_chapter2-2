import { useState } from "react";
import { IProduct } from "../../types.ts";
import { addProductItem, updateProductInfo } from "./utils/productUtils.ts";

export const useProducts = (initialProducts: IProduct[]) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);

  const updateProduct = (updatedProduct: IProduct) => {
    setProducts((prevProducts) =>
      updateProductInfo(prevProducts, updatedProduct)
    );
  };

  const addProduct = (newProduct: IProduct) => {
    setProducts((prevProducts) => addProductItem(prevProducts, newProduct));
  };

  return {
    products,
    updateProduct,
    addProduct
  };
};
