import { ChevronLeft, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex p-4 justify-between fixed w-full bg-white z-10">
      <button
        className="p-2 bg-[#f6f6f6] rounded-lg text-gray-500 active:translate-y-0.5 transition-all shadow-md"
        onClick={() => history.back()}
      >
        <ChevronLeft width={17} height={17} />
      </button>

      <button className="p-2 bg-[#1b2d2a] rounded-lg text-white active:translate-y-0.5 transition-all shadow-md">
        <Heart width={17} height={17} />
      </button>
    </header>
  );
}
