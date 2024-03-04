export default function Loading() {
  return (
    <div className="absolute flex items-center justify-center bg-black opacity-40 left-0 top-0 h-screen w-screen z-50 select-none text-white">
      <div className="animate-ping w-10 h-10 bg-[#afef7e] rounded-full" />
    </div>
  );
}
