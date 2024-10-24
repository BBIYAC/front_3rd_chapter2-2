import { ICoupon } from "../../types.ts";
import { useState } from "react";
import { addCouponItem } from "./utils/couponUtils.ts";
import { useCouponStore } from "../store/store.ts";

export const useCoupons = () => {
  const {coupons, setCoupons} = useCouponStore();
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
  return { coupons, newCoupon, addCoupon, setNewCoupon, handleAddCoupon };
};
