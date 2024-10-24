// useCart.ts
import { ICoupon, IProduct } from "../../types";
import { addToCartItem, calculateCartTotal, removeFromCartItem, updateCartItemQuantity } from "./utils/cartUtils";
import { useCartStore, useCouponStore } from "../store/store";

export const useCart = () => {
  const {cart, setCart} = useCartStore();
  const {selectedCoupon, setSelectedCoupon} = useCouponStore();

  const addToCart = (product: IProduct) => {
    setCart((prevCart) => 
      addToCartItem(prevCart, product)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      removeFromCartItem(prevCart, productId)
    );
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart((prevCart) =>
      updateCartItemQuantity(prevCart, productId, newQuantity)
    );
  };

  const applyCoupon = (coupon: ICoupon) => {
    setSelectedCoupon(coupon);
  };

  const calculateTotal = () => calculateCartTotal(cart, selectedCoupon);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon
  };
};
