import React, { createContext, useContext } from "react";
import { useCart } from "../hooks";
import { ICartItem, ICoupon, IProduct } from "../../types";

interface IProps {
  children: React.ReactNode;
}

interface ICartContextType {
  cart: ICartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  applyCoupon: (coupon: ICoupon) => void;
  calculateTotal: () => any;
  selectedCoupon: ICoupon | null;
}

const CartContext = createContext<ICartContextType | null>(null);

export const CartProvider = ({ children }: IProps) => {
  return (
    <CartContext.Provider value={useCart()}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
