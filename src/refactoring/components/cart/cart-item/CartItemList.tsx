import { useCart } from "../../../hooks/useCart.ts";
import { CartItem } from "./CartItem.tsx";

export const CartItemList = () => {
  const { cart } = useCart();

  return (
    <div className="space-y-2">
      {cart.map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </div>
  );
};
