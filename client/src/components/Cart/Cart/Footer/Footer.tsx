import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-[#1b2d2a] w-screen left-0 rounded-t-[40px] px-10 py-4 flex z-10 items-center justify-center gap-5">
      <span className="text-white">Checkout</span>
      <button className="p-2 rounded-lg bg-[#dbf8c7] shadow-md active:translate-y-0.5 transition-all">
        <ArrowRight width={17} height={17} />
      </button>
    </footer>
  );
}
