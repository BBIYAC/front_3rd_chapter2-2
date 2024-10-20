import { Coupon } from "../../../types";

export const addCouponItem = (coupons: Coupon[], coupon: Coupon):Coupon[] => {
    return [...coupons, coupon]
}