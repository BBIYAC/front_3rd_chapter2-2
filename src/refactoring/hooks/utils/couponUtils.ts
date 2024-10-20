import { ICoupon } from "../../../types";

export const addCouponItem = (coupons: ICoupon[], coupon: ICoupon):ICoupon[] => {
    return [...coupons, coupon]
}