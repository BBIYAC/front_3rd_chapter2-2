import { ICoupon } from "../../types.ts";
import { useState } from "react";
import { addCouponItem } from "./utils/couponUtils.ts";

export const useCoupons = (initialCoupons: ICoupon[]) => {
  const [coupons, setCoupons] = useState<ICoupon[]>(initialCoupons);

  const addCoupon = (newCoupon: ICoupon) => {
    setCoupons((prevCoupons) => addCouponItem(prevCoupons, newCoupon));
  };
  return { coupons, addCoupon };
};
