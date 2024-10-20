import { CartItem, Discount, Product } from "../../types";

export const getRemainingStock = (cart: CartItem[], product: Product): number => {
	const cartItem = cart.find(item => item.product.id === product.id);
	return product.stock - (cartItem?.quantity || 0);
};

export const getMaxDiscount = (discounts: Discount[]): number => {
	return discounts.reduce((max, discount) => Math.max(max, discount.rate), 0);
};

export const getAppliedDiscount = (item: CartItem): number => {
	const { discounts } = item.product;
	const { quantity } = item;

	const appliedDiscount = discounts.reduce((maxDiscount, discount) => {
		return quantity >= discount.quantity 
		? Math.max(maxDiscount, discount.rate)
		: maxDiscount;
	}, 0);

	return appliedDiscount;
};