import { IProduct } from "../../../../types.ts";
import { useProductContext } from "../../../contexts/useProductContext.tsx";
import { Product } from "./Product.tsx";

export const ProductList = () => {
  const { products } = useProductContext();

  return (
    <div className="space-y-2">
      {products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
