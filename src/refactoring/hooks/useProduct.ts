import { useState } from "react";
import { Product } from "../../types.ts";
import { addProductItem, updateProductInfo } from "./utils/productUtils.ts";

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const updateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      updateProductInfo(prevProducts, updatedProduct)
    );
  };

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => addProductItem(prevProducts, newProduct));
  };

  return {
    products,
    updateProduct,
    addProduct
  };
};
