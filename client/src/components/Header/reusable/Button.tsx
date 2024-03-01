export default function Button({
  onClick,
  children
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="select-none p-2 hover:bg-gray-300 rounded-lg active:translate-y-0.5"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
