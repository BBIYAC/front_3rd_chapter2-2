import { create } from "zustand";
import { ICartItem, ICoupon, IProduct } from "../../types";

interface ICartStore {
  cart: ICartItem[];
  setCart: (updateFn: (prevCart: ICartItem[]) => ICartItem[]) => void;
}

interface IProductStore {
  products: IProduct[];
  setProducts: (updateFn: (prevProduct: IProduct[]) => IProduct[]) => void;
}

interface ICouponStore {
  coupons: ICoupon[];
  selectedCoupon: ICoupon | null,
  setCoupons: (updateFn: (prevCoupon: ICoupon[]) => ICoupon[]) => void;
  setSelectedCoupon: (coupon: ICoupon) => void;
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

const useCartStore = create<ICartStore>((set) => ({
  cart: [],
  setCart: (updateFn) => set((state) => ({
    cart: updateFn(state.cart),
  })),
}));

const useProductStore = create<IProductStore>((set) => ({
  products: [...initialProducts],
  setProducts: (updateFn) => set((state) => ({
    products: updateFn(state.products),
  })),
}));

const useCouponStore = create<ICouponStore>((set) => ({
  coupons: [...initialCoupons],
  selectedCoupon: null,
  setCoupons: (updateFn) => set((state) => ({
    coupons: updateFn(state.coupons),
  })),
  setSelectedCoupon: (coupon: ICoupon) => set({ selectedCoupon: coupon }),
}));

export {useCartStore, useProductStore, useCouponStore}