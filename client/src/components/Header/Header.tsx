import { HEADER_VALUES } from "./constants/constants";

import { Link } from "react-router-dom";

import Button from "./reusable/Button";

export default function Header() {
  return (
    <header className="flex h-16 bg-gray-200 border-b-[1px] px-10">
      <div className="flex gap-10 justify-center items-center h-full flex-1">
        {HEADER_VALUES.map((value, idx) => {
          return (
            <Button onClick={() => {}} key={idx}>
              <span className="uppercase text-gray-500 font-semibold">
                {value.title}
              </span>
              {value.value !== 0 && (
                <span className="text-yellow-500 font-semibold">
                  +{value.value}
                </span>
              )}
            </Button>
          );
        })}
      </div>

      <div className="flex gap-3 justify-center items-center h-full">
        <Link to="/login">
          <Button onClick={() => {}}>
            <span className="uppercase text-gray-500 font-semibold">
              Log in
            </span>
          </Button>
        </Link>

        <Link to="/sign">
          <Button onClick={() => {}}>
            <span className="uppercase text-gray-500 font-semibold">
              Sign in
            </span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
