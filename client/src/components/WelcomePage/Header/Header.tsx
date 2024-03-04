import { Link } from "react-router-dom";
import { Search, ShoppingBag, SlidersHorizontal } from "lucide-react";
import { useGlobalContext } from "../../../context/globalContext";

export default function Header() {
  const { basket } = useGlobalContext();

  return (
    <header className="flex py-2 px-3 items-center justify-around fixed w-full left-0 bg-white h-[70px] z-10">
      <div className="flex bg-[#f6f6f6] p-2 px-4 rounded-lg items-center gap-4">
        <div>
          <Search width={18} height={18} />
        </div>
        <input
          type="text"
          placeholder="Search your food"
          className="bg-inherit outline-none text-sm font-semibold selection:bg-[#dbf8c7] flex-1 placeholder:text-xs"
        />
        <button className="p-2 bg-[#afef7e] rounded-lg shadow-md active:translate-y-0.5 transition-all">
          <SlidersHorizontal width={19} height={19} />
        </button>
      </div>

      <Link to={"/cart"}>
        <button className="p-2 bg-[#1b2d2a] rounded-lg text-white shadow-md active:translate-y-0.5 relative">
          <div>
            <ShoppingBag width={19} height={19} />
          </div>
          {basket.length > 0 && (
            <div className="absolute text-[10px] px-[6px] bg-indigo-500 rounded-full -top-1 -right-1">
              {basket.length}
            </div>
          )}
        </button>
      </Link>
    </header>
  );
}
