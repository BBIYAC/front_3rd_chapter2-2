import { Coupon } from "../../types.ts";
import { useState } from "react";
import { addCouponItem } from "./utils/couponUtils.ts";

export const useCoupons = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

  const addCoupon = (newCoupon: Coupon) => {
    setCoupons((prevCoupons) => addCouponItem(prevCoupons, newCoupon));
  };
  return { coupons, addCoupon };
};
