import React, { createContext, useContext } from "react";
import { useCoupons } from "../hooks";
import { ICoupon } from "../../types";

interface IProps {
  children: React.ReactNode;
}

interface ICouponContextType {
  coupons: ICoupon[];
  newCoupon: ICoupon;
  setNewCoupon: (coupon: ICoupon) => void;
  handleAddCoupon: () => void;
}

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

const CouponContext = createContext<ICouponContextType | null>(null);

export const CouponProvider = ({ children }: IProps) => {
  return (
    <CouponContext.Provider value={useCoupons(initialCoupons)}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCouponContext = () => {
  const context = useContext(CouponContext);

  if (!context) {
    throw new Error("useCouponContext must be used within a CouponProvider");
  }

  return context;
};
