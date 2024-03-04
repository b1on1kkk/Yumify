import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

import { useGlobalContext } from "../../../../context/globalContext";

import { addProductToBasket } from "../../API/addProductToBasket";
import { deleteProductFromBasket } from "../../API/deleteProductFromBasket";
import { getBasket } from "../../../WelcomePage/API/getBasket";

import type { TBasketProduct } from "../../../interfaces/interfaces";

import { useProductDetailedInfContent } from "../context/productDetailedInfContext";

export default function Footer() {
  let { product, quantity, productStatus, setLoading } =
    useProductDetailedInfContent();

  const { basket, setBasket } = useGlobalContext();
  const [newPrice, setNewPrice] = useState<number | null>(null);

  useEffect(() => {
    if (product) {
      setNewPrice(
        parseFloat(product[0].price.replace(/руб\./, "").replace(",", "."))
      );

      getBasket().then((data: TBasketProduct[]) => setBasket(data));
    }
  }, [product]);

  return (
    <footer className="fixed bottom-0 bg-[#1b2d2a] w-screen left-0 rounded-t-[40px] px-10 py-4 flex justify-between z-10 items-center">
      {basket ? (
        <>
          {productStatus ? (
            <button
              className="p-2 rounded-lg bg-red-500 shadow-md active:translate-y-0.5 transition-all"
              onClick={() => {
                if (product) {
                  setLoading(true);
                  deleteProductFromBasket(
                    product[0].product_id,
                    quantity,
                    (products) => {
                      setLoading(false);
                      setBasket(products.data);
                    }
                  );
                }
              }}
            >
              <X width={17} height={17} />
            </button>
          ) : (
            <button
              className="p-2 rounded-lg bg-[#dbf8c7] shadow-md active:translate-y-0.5 transition-all"
              onClick={() => {
                if (product) {
                  setLoading(true);
                  addProductToBasket(
                    product[0].product_id,
                    quantity,
                    (products) => {
                      setLoading(false);
                      setBasket(products.data);
                    }
                  );
                }
              }}
            >
              <Check width={17} height={17} />
            </button>
          )}
        </>
      ) : (
        <div className="h-[33px] w-[33px] bg-gray-400 animate-pulse shadow-md rounded-lg"></div>
      )}

      <div className="flex-1 flex items-center justify-center text-white">
        {productStatus ? (
          <span>Remove from cart</span>
        ) : (
          <span>Add to cart</span>
        )}
      </div>

      <div className="px-2 py-2 bg-[#2f4541] rounded-lg flex">
        {product ? (
          <span className="text-white text-xs font-semibold">
            {newPrice ? (newPrice * quantity).toFixed(2) : 0} руб
          </span>
        ) : (
          <></>
        )}
      </div>
    </footer>
  );
}
