import { useEffect, useState } from "react";

import ProductCard from "../../ReusableComp/ProductCard";

import { getProducts } from "../API/getProducts";

import type { TRecommendedProducts } from "../../interfaces/interfaces";
import { useGlobalContext } from "../../../context/globalContext";

export default function Products() {
  const { user } = useGlobalContext();

  const [products, setProducts] = useState<TRecommendedProducts[]>([]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      getProducts().then((data: TRecommendedProducts[]) => setProducts(data));
    }
  }, [user]);

  return (
    <div className="grid grid-cols-2 gap-4 py-[100px] px-3">
      {products.map((product) => {
        return (
          <ProductCard
            product_id={product.product_id}
            title={product.product_title}
            type={product.category}
            price={product.price}
            img_link={product.picture}
            key={product.product_id}
          />
        );
      })}
    </div>
  );
}
