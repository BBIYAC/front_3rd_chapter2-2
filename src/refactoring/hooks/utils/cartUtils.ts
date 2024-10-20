import { ICartItem, ICoupon, IProduct } from "../../../types";

export const calculateItemTotal = (
  item: ICartItem,
  applyDiscount: boolean = true
) => {
  const { price } = item.product;
  const { quantity } = item;
  const applicableDiscount = applyDiscount ? getMaxApplicableDiscount(item) : 0;

  return price * quantity * (1 - applicableDiscount);
};

export const getMaxApplicableDiscount = (item: ICartItem) => {
  const { discounts } = item.product;
  const { quantity } = item;

  const maxDiscount = discounts.reduce((max, discount) => {
    return quantity >= discount.quantity && discount.rate > max
      ? discount.rate
      : max;
  }, 0);

  return maxDiscount;
};

export const applyCouponDiscount = (total: number, coupon: ICoupon | null) => {
  if (!coupon) return total;

  if (coupon.discountType === "amount") {
    return Math.max(0, total - coupon.discountValue);
  } else {
    return total * (1 - coupon.discountValue / 100);
  }
};

export const calculateCartTotal = (
  cart: ICartItem[],
  selectedCoupon: ICoupon | null
) => {
  const totalBeforeDiscount = cart.reduce((total: number, item: ICartItem) => {
    return total + calculateItemTotal(item, false);
  }, 0);
  const totalAfterDiscount = cart.reduce((total: number, item: ICartItem) => {
    return total + calculateItemTotal(item);
  }, 0);
  const totalAfterCoupon = applyCouponDiscount(totalAfterDiscount, selectedCoupon);
  const totalDiscount = totalBeforeDiscount - totalAfterCoupon;

  return {
    totalBeforeDiscount: Math.round(totalBeforeDiscount),
    totalAfterDiscount: Math.round(totalAfterCoupon),
    totalDiscount: Math.round(totalDiscount)
  };
};

export const updateCartItemQuantity = (
  cart: ICartItem[],
  productId: string,
  newQuantity: number
): ICartItem[] => {
  return cart
    .map((item) => {
      if (item.product.id === productId) {
        const maxQuantity = item.product.stock;
        const updatedQuantity = Math.max(0, Math.min(newQuantity, maxQuantity));
        return updatedQuantity > 0
          ? { ...item, quantity: updatedQuantity }
          : null;
      }
      return item;
    })
    .filter((item): item is ICartItem => item !== null);
};

export const addToCartItem = (cart: ICartItem[], product: IProduct): ICartItem[] => {
  const existingItem = cart.find(
    (item) => item.product.id === product.id
  );
  if (existingItem) {
    return cart.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
        : item
    );
  }
  return [...cart, { product, quantity: 1 }];
}

export const removeFromCartItem = (cart: ICartItem[], productId: string): ICartItem[] => {
  return cart.filter((item) => item.product.id !== productId)
}