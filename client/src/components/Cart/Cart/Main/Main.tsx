import { BadgePercent } from "lucide-react";

import AddedToPrice from "../AddedToPrice/AddedToPrice";
import CartProductCard from "./CartProduct/CartProductCard";

import { totalPriceCounter } from "./utils/totalPriceCounter";

import type { TBasketProduct } from "../../../interfaces/interfaces";

export default function Main({ basket }: { basket: TBasketProduct[] }) {
  const total = totalPriceCounter(basket).toFixed(2);

  return (
    <main className="py-[100px] px-3">
      <div className="mb-3 flex">
        <h1 className="font-semibold flex-1">Order details</h1>
      </div>

      <div className="flex flex-col border-b-2">
        {basket.map((product, idx) => {
          return (
            <CartProductCard
              title={product.products.product_title}
              price={product.products.price}
              image_link={product.products.picture}
              amout={product.quantity}
              product_id={product.products.product_id}
              type={product.products.category}
              key={idx}
            />
          );
        })}
      </div>

      <div className="pt-5 px-7 flex flex-col gap-7">
        <button className="bg-[#f6f6f6] py-5 px-4 flex rounded-lg items-center gap-4 active:translate-y-0.5 transition-all">
          <div>
            <BadgePercent width={20} height={20} />
          </div>
          <div className="text-sm font-semibold opacity-60 flex-1 flex">
            <span>Promo Code</span>
          </div>
          <span className="font-semibold">Apply</span>
        </button>

        <div className="bg-white shadow-md px-3 py-6 rounded-lg">
          <AddedToPrice
            text="Subtotal"
            price={`${total} руб`}
            status="notlast"
          />
          <AddedToPrice text="Delivery" price="Free" status="notlast" />
          <AddedToPrice text="Total" price={`${total} руб`} status="last" />
        </div>
      </div>
    </main>
  );
}
