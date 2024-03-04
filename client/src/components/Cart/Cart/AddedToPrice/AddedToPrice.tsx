export default function AddedToPrice({
  status,
  text,
  price
}: {
  status: "last" | "notlast";
  text: string;
  price: string;
}) {
  return (
    <div
      className={`flex ${status === "last" ? "" : "border-b-[1px] pb-3 mb-3"}`}
    >
      <span className="text-sm font-semibold text-gray-500 flex-1">{text}</span>
      <span
        className={` text-sm font-semibold ${
          status === "last" ? "text-indigo-500" : ""
        }`}
      >
        {price}
      </span>
    </div>
  );
}
