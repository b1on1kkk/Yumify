import { Minus, Plus } from "lucide-react";

import { useEffect, useState } from "react";
import type { TRecommendedProducts } from "../../../interfaces/interfaces";

import { getRecommendedProducts } from "../../../WelcomePage/API/getRecommendedProducts";

import { Link } from "react-router-dom";

import { useProductDetailedInfContent } from "../context/productDetailedInfContext";

export default function Main() {
  let { product, quantity, setQuantity, productStatus } =
    useProductDetailedInfContent();

  const [recommendedProducts, setRecommendedProducts] = useState<
    TRecommendedProducts[]
  >([]);

  useEffect(() => {
    getRecommendedProducts().then((data: TRecommendedProducts[]) => {
      setRecommendedProducts(data);
    });
  }, []);

  const fakeArray = new Array(4).fill(0);

  return (
    <main className="py-[100px]">
      <header className="px-10">
        {product && product.length > 0 ? (
          <div className="font-bold text-3xl text-center mb-2">
            {product[0].product_title}
          </div>
        ) : (
          <div className="h-10 bg-gray-400 animate-pulse rounded-lg mb-2"></div>
        )}

        <div className="flex gap-5">
          <div className="flex-1 text-center flex gap-1 items-center justify-center pl-14">
            {product && product.length > 0 ? (
              <span className="font-semibold text-sm">4.6</span>
            ) : (
              <div className="h-5 bg-gray-400 animate-pulse rounded-lg w-7" />
            )}

            {product && product.length > 0 ? (
              <span className="text-[10px] text-gray-400 font-bold">
                (360 reviews)
              </span>
            ) : (
              <div className="h-5 bg-gray-400 animate-pulse rounded-lg w-16" />
            )}
          </div>
          {product && product.length > 0 ? (
            <div className="font-extrabold">{product[0].price}</div>
          ) : (
            <div className="h-5 bg-gray-400 animate-pulse rounded-lg w-7" />
          )}
        </div>

        <div className="flex items-center justify-center mt-5">
          {product && product.length > 0 ? (
            <img
              src={product[0].picture}
              alt=""
              className="rounded-3xl drop-shadow-2xl"
            />
          ) : (
            <div className="h-[190px] bg-gray-400 animate-pulse w-[216px] rounded-3xl" />
          )}
        </div>

        <div className="mt-5 flex justify-center">
          {product && product.length > 0 ? (
            <>
              {!productStatus ? (
                <div className="bg-[#f6f6f6] p-1.5 rounded-lg flex items-center">
                  <button
                    className="flex p-2 bg-white rounded-lg shadow-md active:translate-y-0.5 transition-transform"
                    onClick={() => {
                      if (quantity !== 1) setQuantity(--quantity);
                    }}
                  >
                    <Minus height={20} width={20} />
                  </button>
                  <span className="mx-6 min-w-8 text-center">{quantity}</span>
                  <button
                    className="flex p-2 bg-[#1b2d2a] rounded-lg shadow-md text-white active:translate-y-0.5 transition-transform"
                    onClick={() => setQuantity(++quantity)}
                  >
                    <Plus height={20} width={20} />
                  </button>
                </div>
              ) : (
                <div className="h-[48px]" />
              )}
            </>
          ) : (
            <div className="h-[50px] bg-gray-400 animate-pulse rounded-lg w-[140px]" />
          )}
        </div>
      </header>

      <div className="px-3 mt-5">
        <div className="mb-3 flex">
          <h1 className="font-semibold flex-1">Food details</h1>
        </div>

        <div>
          {product && product.length > 0 ? (
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex
              officia nihil laboriosam architecto tenetur, voluptate fugit ea,
              mollitia delectus doloremque nam et nemo, facere accusantium
              dolore? Quo, excepturi doloremque.
            </p>
          ) : (
            <div className="h-[80px] bg-gray-400 animate-pulse rounded-lg w-full" />
          )}
        </div>

        <div className="mb-3 flex mt-5">
          <h1 className="font-semibold flex-1">Add extra items</h1>
        </div>

        <div className="flex justify-between">
          {recommendedProducts.length > 0 ? (
            <>
              {recommendedProducts.map((product) => {
                return (
                  <Link
                    to={`/products/${product.category}/${product.product_id}`}
                    key={product.product_id}
                  >
                    <button>
                      <div className="flex flex-col items-center">
                        <div className="h-14 w-14 relative items-center justify-center">
                          <span className="absolute -right-1 -bottom-0.5 p-0.5 bg-[#1b2d2a] rounded-full text-white">
                            <Plus width={11} height={11} />
                          </span>
                          <img
                            src={product.picture}
                            alt=""
                            className="rounded-lg "
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold w-[55px] truncate">
                            {product.product_title}
                          </span>
                          <span className="text-[10px] font-semibold text-gray-400">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </button>
                  </Link>
                );
              })}
            </>
          ) : (
            <>
              {fakeArray.map((_, idx) => {
                return (
                  <div
                    className="h-14 bg-gray-400 animate-pulse rounded-lg w-14"
                    key={idx}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
