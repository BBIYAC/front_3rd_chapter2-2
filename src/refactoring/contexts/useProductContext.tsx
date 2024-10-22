import React, { createContext, useContext } from "react";
import { useProducts } from "../hooks";
import { IDiscount, IProduct } from "../../types";

interface IProps {
  children: React.ReactNode;
}

interface IProductContextType {
  products: IProduct[];
  showNewProductForm: boolean;
  setShowNewProductForm: (isShow: boolean) => void;
  newProduct: Omit<IProduct, "id">;
  setNewProduct: (product: Omit<IProduct, "id">) => void;
  handleAddNewProduct: () => void;
  openProductIds: Set<string>;
  editingProduct: IProduct | null;
  toggleProductAccordion: (productId: string) => void;
  handleProductNameUpdate: (productId: string, name: string) => void;
  handlePriceUpdate: (productId: string, price: number) => void;
  handleStockUpdate: (productId: string, stock: number) => void;
  handleRemoveDiscount: (productId: string, index: number) => void;
  newDiscount: IDiscount;
  setNewDiscount: (discount: IDiscount) => void;
  handleAddDiscount: (productId: string) => void;
  handleEditComplete: () => void;
  handleEditProduct: (product: IProduct) => void;
}

const initialProducts: IProduct[] = [
  {
    id: "p1",
    name: "상품1",
    price: 10000,
    stock: 20,
    discounts: [
      { quantity: 10, rate: 0.1 },
      { quantity: 20, rate: 0.2 }
    ]
  },
  {
    id: "p2",
    name: "상품2",
    price: 20000,
    stock: 20,
    discounts: [{ quantity: 10, rate: 0.15 }]
  },
  {
    id: "p3",
    name: "상품3",
    price: 30000,
    stock: 20,
    discounts: [{ quantity: 10, rate: 0.2 }]
  }
];

const ProductContext = createContext<IProductContextType | null>(null);

export const ProductProvider = ({ children }: IProps) => {
  return (
    <ProductContext.Provider value={useProducts(initialProducts)}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }

  return context;
};
