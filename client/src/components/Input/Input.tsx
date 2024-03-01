interface TInput {
  title: string;
  value: string;
  type: "email" | "text" | "password";
  id: string;
  error_status: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export default function Input({
  title,
  value,
  type,
  id,
  onChange,
  error_status,
  onBlur
}: TInput) {
  return (
    <div className="flex flex-col mb-5">
      <label
        htmlFor={id}
        id={id + "_label"}
        className="font-semibold text-sm mb-3"
      >
        {title}
      </label>
      <input
        type={type}
        id={id}
        className={`focus:outline-none border-[1px] px-3 py-2 text-[15px] focus:border-indigo-500 transition-colors duration-200 ${
          error_status && "border-red-500"
        }`}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="true"
        value={value}
      />
      <span className="text-xs text-red-500 font-bold mt-2 h-4">
        {error_status && "Fill this field!"}
      </span>
    </div>
  );
}
