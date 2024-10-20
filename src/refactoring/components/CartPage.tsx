import { ICoupon, IProduct } from '../../types.ts';
import { CartProvider } from '../contexts/useCartContext.tsx';
import { CartItemList } from './CartItemList.tsx';
import { Coupon } from './Coupon.tsx';
import { ProductList } from './ProductList.tsx';
import { Total } from './Total.tsx';

interface IProps {
  products: IProduct[];
  coupons: ICoupon[];
}

export const CartPage = ({ products, coupons }: IProps) => {

  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">장바구니</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
            <ProductList products={products} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
            <CartItemList />
            <Coupon coupons={coupons} />
            <Total />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};
