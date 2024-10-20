import { Product } from "../../../types";

export const updateProductInfo = (products: Product[], product: Product): Product[] => {
return products.map((item) =>
    item.id === product.id ? product : item
  )
}

export const addProductItem = (products: Product[], product: Product): Product[] => {
    return [...products, product]
}