import { ICoupon } from "../../types.ts";
import { useState } from "react";
import { addCouponItem } from "./utils/couponUtils.ts";

export const useCoupons = (initialCoupons: ICoupon[]) => {
  const [coupons, setCoupons] = useState<ICoupon[]>(initialCoupons);
  const [newCoupon, setNewCoupon] = useState<ICoupon>({
    name: "",
    code: "",
    discountType: "percentage",
    discountValue: 0
  });

  const addCoupon = (newCoupon: ICoupon) => {
    setCoupons((prevCoupons) => addCouponItem(prevCoupons, newCoupon));
  };

  const handleAddCoupon = () => {
    addCoupon(newCoupon);
    setNewCoupon({
      name: "",
      code: "",
      discountType: "percentage",
      discountValue: 0
    });
  };
  return { coupons, newCoupon, setNewCoupon, handleAddCoupon };
};
