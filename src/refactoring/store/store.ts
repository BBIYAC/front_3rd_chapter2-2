import { create } from "zustand";
import { ICartItem, ICoupon, IProduct } from "../../types";

interface IStore {
  cart: ICartItem[];
  products: IProduct[];
  coupons: ICoupon[];
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

const initialCoupons: ICoupon[] = [
  {
    name: "5000원 할인 쿠폰",
    code: "AMOUNT5000",
    discountType: "amount",
    discountValue: 5000
  },
  {
    name: "10% 할인 쿠폰",
    code: "PERCENT10",
    discountType: "percentage",
    discountValue: 10
  }
];

const useStore = create((set) => ({
  cart: [],
  products: [...initialProducts],
  coupons: [...initialCoupons],

  setCart: (newCart: ICartItem[]) => set(() => ({ cart: newCart })),
  setProducts: (newProducts: IProduct[]) =>
    set(() => ({ products: newProducts })),
  setCoupons: (newCoupons: ICoupon[]) => set(() => ({ products: newCoupons }))
}));

export default useStore;
