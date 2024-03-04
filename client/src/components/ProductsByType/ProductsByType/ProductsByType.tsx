import { useEffect, useState } from "react";
import { TRecommendedProducts } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";
import ProductCard from "../../ReusableComp/ProductCard";
import { getProductsByType } from "../API/getProductsByType";

export default function ProductsByType() {
  const { product_type } = useParams();
  const [products, setProducts] = useState<TRecommendedProducts[]>([]);

  useEffect(() => {
    getProductsByType(product_type).then((data: TRecommendedProducts[]) => {
      setProducts(data);
    });
  }, []);

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
