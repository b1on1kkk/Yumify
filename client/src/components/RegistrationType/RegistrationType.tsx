import { Link } from "react-router-dom";

interface TRegistrationType {
  link: string;
  before_link_text: string;
  link_text: string;
}

export default function RegistrationType({
  link,
  before_link_text,
  link_text
}: TRegistrationType) {
  return (
    <div className="py-4 mt-3 w-[460px] flex justify-center bg-white border-[1px] shadow-md rounded-md text-sm gap-1 font-semibold">
      <span className="text-gray-400">{before_link_text}</span>
      <span className="text-indigo-500 underline underline-offset-4">
        <Link to={link}>{link_text}</Link>
      </span>
    </div>
  );
}
