import { IProduct } from "../../../../types.ts";
import { useProducts } from "../../../hooks/useProduct.ts";
import { Product } from "./Product.tsx";

export const ProductList = () => {
  const { products } = useProducts();

  return (
    <div className="space-y-2">
      {products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
