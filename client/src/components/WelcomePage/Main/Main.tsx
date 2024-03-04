import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";

import { Link } from "react-router-dom";

import ProductCard from "../../ReusableComp/ProductCard";

import type {
  TBasketProduct,
  TRecommendedProducts
} from "../../interfaces/interfaces";
import { getRecommendedProducts } from "../API/getRecommendedProducts";
import { getBasket } from "../API/getBasket";

import { ProductsCategory } from "../constants/ProductsCategory";

export default function Main() {
  const { setBasket } = useGlobalContext();

  const [firstHalf, setFirstHalf] = useState<TRecommendedProducts[]>([]);
  const [secondHalf, setSecondHalf] = useState<TRecommendedProducts[]>([]);

  useEffect(() => {
    getRecommendedProducts().then((data: TRecommendedProducts[]) => {
      const halfIndex = Math.ceil(data.length / 2);
      setFirstHalf(data.slice(0, halfIndex));
      setSecondHalf(data.slice(halfIndex));
    });

    getBasket().then((data: TBasketProduct[]) => {
      setBasket(data);
    });
  }, []);

  return (
    <main className="py-24 px-3">
      <div className="mb-3 flex">
        <h1 className="font-semibold flex-1">Choose category</h1>
      </div>

      <div className="flex justify-between mb-10">
        {ProductsCategory.map((product) => {
          return (
            <Link
              to={`/products/${product.title.toLowerCase()}`}
              key={product.id}
            >
              <div className="flex flex-col items-center gap-1">
                <div
                  className="h-12 w-12 bg-[#f8f9f0] rounded-lg flex items-center justify-center shadow-md"
                  key={product.id}
                >
                  <img
                    src={product.images}
                    alt={`${product.title}_image`}
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <span className="text-xs font-semibold">{product.title}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mb-3 flex">
        <h1 className="font-semibold flex-1">Recommended</h1>
        <Link to="/products">
          <span className="text-xs font-semibold">See all ⇒</span>
        </Link>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col gap-5 flex-1">
          {firstHalf.map((product) => {
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
        <div className="flex flex-col gap-5 mt-14 flex-1">
          {secondHalf.map((product) => {
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
      </div>
    </main>
  );
}
