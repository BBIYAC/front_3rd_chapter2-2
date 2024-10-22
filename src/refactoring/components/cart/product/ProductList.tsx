import { IProduct } from "../../../../types.ts";
import { Product } from "./Product.tsx";

interface IProps {
  products: IProduct[];
}

export const ProductList = ({ products }: IProps) => {
  return (
    <div className="space-y-2">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
