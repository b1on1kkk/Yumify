import { NavLink } from "react-router-dom";
import { PageFooterNavigation } from "./constants/PageFooterNavigation";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-[#1b2d2a] w-screen left-0 rounded-t-[40px] px-10 py-4 flex justify-between z-10">
      {PageFooterNavigation.map((nav) => {
        return (
          <NavLink
            key={nav.id}
            to={nav.linkTo}
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded-lg bg-[#dbf8c7] shadow-md"
                : "p-2 text-white"
            }
          >
            {nav.picture}
          </NavLink>
        );
      })}
    </footer>
  );
}
