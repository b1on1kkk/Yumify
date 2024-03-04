import { ChevronLeft } from "lucide-react";

export default function Header() {
  return (
    <header className="flex p-4 fixed w-full bg-white z-10 items-center">
      <button
        className="p-2 bg-[#f6f6f6] rounded-lg text-gray-500 active:translate-y-0.5 transition-all shadow-md"
        onClick={() => history.back()}
      >
        <ChevronLeft width={17} height={17} />
      </button>

      <div className="flex-1 text-center mr-6">
        <h1 className="font-semibold">Shopping Cart</h1>
      </div>
    </header>
  );
}
