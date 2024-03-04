import { Link } from "react-router-dom";

import { PencilLine, X } from "lucide-react";

import { deleteProductFromBasket } from "../../../../DetailedProduct/API/deleteProductFromBasket";
import { useGlobalContext } from "../../../../../context/globalContext";

import type { TCartProductCard } from "../../interfaces/interfaces";

export default function CartProductCard({
  image_link,
  price,
  title,
  amout,
  product_id,
  type
}: TCartProductCard) {
  const { setBasket } = useGlobalContext();

  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="relative p-3 bg-[#fbfcde] flex drop-shadow-sm rounded-lg overflow-hidden flex-1">
        <Link to={`/products/${type}/${product_id}`} className="flex gap-5">
          <div>
            <img
              src={image_link}
              alt={`${image_link}_image`}
              className="w-[65px] h-[65px] rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 w-[200px]">
            <span className="text-lg font-bold truncate">{title}</span>
            <span className="text-[13px] font-bold opacity-60">
              {amout} item added
            </span>
          </div>

          <div className="flex absolute -right-2 -bottom-2 w-14 h-14 bg-[#f0f194] rounded-full items-center justify-center">
            <span className="font-bold text-sm text-center w-[50px]">
              {price}
            </span>
          </div>
        </Link>

        <button
          className="absolute right-0 top-0 p-2 text-gray-600"
          onClick={() => {
            deleteProductFromBasket(product_id, 999, (products) =>
              setBasket(products.data)
            );
          }}
        >
          <X width={13} height={13} />
        </button>
      </div>

      <button className="p-2 bg-[#fbfcde] rounded-lg drop-shadow-sm text-gray-600">
        <PencilLine width={20} height={20} />
      </button>
    </div>
  );
}
