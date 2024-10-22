import { useCartContext } from "../../contexts/useCartContext.tsx";
import { CartItem } from "./CartItem.tsx";

export const CartItemList = () => {
  const { cart } = useCartContext();

  return (
    <div className="space-y-2">
      {cart.map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </div>
  );
};
