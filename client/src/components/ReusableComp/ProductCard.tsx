import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface TProductCard {
  product_id: number;
  title: string;
  type: string;
  price: string;
  img_link: string;
}

export default function ProductCard({
  title,
  type,
  price,
  img_link,
  product_id
}: TProductCard) {
  return (
    <div className="flex flex-col bg-[#f8f9f0] h-[230px] rounded-xl p-5 border-[1px] relative overflow-hidden shadow-md">
      {/* product title */}
      <div className="text-lg font-bold w-[115px] h-[30px]">
        <div className="truncate">{title}</div>
      </div>

      {/* button adding to cart */}
      <button className="absolute p-3 bg-[#afef7e] rounded-full -right-2 -top-2 active:translate-y-0.5 transition-all shadow-md">
        <ShoppingCart width={18} height={18} />
      </button>

      {/* product type */}
      <span className="bg-[#e6e2ff] absolute -left-2 bottom-7 -rotate-90 px-2 text-[10px] rounded-full font-semibold">
        {type}
      </span>

      <Link to={`/products/${type}/${product_id}`}>
        {/* product img */}
        <div className="absolute -right-24 -bottom-12">
          <div className="absolute w-10 h-10 bg-gradient-to-t from-[#f3c566] to-[#d39d42] -rotate-45 left-1 -top-1 z-0 flex items-center justify-center font-bold shadow-md text-sm">
            <span className="text-center">{price}</span>
          </div>
          <span className="z-10">
            <img
              src={img_link}
              alt={`${img_link}_img`}
              className="rounded-full"
            />
          </span>
        </div>
      </Link>
    </div>
  );
}
