import { CartItemList } from "../components/cart/cart-item/CartItemList.tsx";
import { Coupon } from "../components/cart/coupon/Coupon.tsx";
import { ProductList } from "../components/cart/product/ProductList.tsx";
import { Total } from "../components/cart/total/Total.tsx";

export const CartPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
          <ProductList />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
          <CartItemList />
          <Coupon />
          <Total />
        </div>
      </div>
    </div>
  );
};
