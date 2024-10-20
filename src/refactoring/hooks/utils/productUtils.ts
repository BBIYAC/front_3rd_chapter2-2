import { IProduct } from "../../../types";

export const updateProductInfo = (products: IProduct[], product: IProduct): IProduct[] => {
return products.map((item) =>
    item.id === product.id ? product : item
  )
}

export const addProductItem = (products: IProduct[], product: IProduct): IProduct[] => {
    return [...products, product]
}