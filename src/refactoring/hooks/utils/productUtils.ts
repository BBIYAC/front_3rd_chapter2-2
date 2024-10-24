import { IDiscount, IProduct } from "../../../types";

export const updateProductInfo = (products: IProduct[], product: IProduct): IProduct[] => {
  return products.map((item) =>
      item.id === product.id ? product : item
    )
}

export const addProductItem = (products: IProduct[], product: IProduct): IProduct[] => {
    return [...products, product]
}

export const findProduct = (products: IProduct[], productId: string): IProduct | null => {
  return products.find((p) => p.id === productId) || null;
}

export const editProductInfo = (prevProduct: IProduct, editInfo: Partial<IProduct>): IProduct => {
  return { ...prevProduct, ...editInfo }
}

export const removeDiscount = (discounts: IDiscount[], index: number): IDiscount[] => {
  return discounts.filter((_, i) => i !== index)
}

export const addProductId = (product: Omit<IProduct, 'id'>, productId: string): IProduct => {
  return { ...product, id: productId }
}