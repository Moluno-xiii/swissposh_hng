/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SecondaryNav = ({href, text}) => {
  return (
    <ul className="flex h-[55px] items-center justify-center gap-x-[37px] bg-[#5A6D81] text-sm font-medium capitalize leading-[18.9px] text-white md:text-xs">
      <li className="max-md:font-bold max-md:uppercase cursor-pointer inline-block md:hidden">
        <NavLink
          to={href}
          className={({ isActive }) =>
            `font-black leading-[21.6px] ${isActive ? "pb-1 md:border-b-2" : ""}`
          }
        >
          {text}
        </NavLink>{" "}
      </li>
      <li className="hidden cursor-pointer max-md:font-bold max-md:uppercase md:inline-block">
        <NavLink
          to="/women"
          className={({ isActive }) =>
            `font-black leading-[21.6px] ${isActive ? "pb-1 md:border-b-2" : ""}`
          }
        >
          women
        </NavLink>{" "}
      </li>
      <li className="hidden cursor-pointer md:inline-block">
        {" "}
        <NavLink
          to="/men"
          className={({ isActive }) =>
            `font-black leading-[21.6px] ${isActive ? "pb-1 md:border-b-2" : ""}`
          }
        >
          Men
        </NavLink>{" "}
      </li>
      <li className="hidden cursor-pointer md:inline-block">Baby</li>
      <li className="hidden cursor-pointer md:inline-block">Kids</li>
      <li className="hidden cursor-pointer md:inline-block">Beauty</li>
      <li className="hidden cursor-pointer md:inline-block">Sport</li>
      <li className="hidden cursor-pointer md:inline-block">Sale</li>
      <li className="hidden cursor-pointer md:inline-block">Sustainability</li>
    </ul>
  );
};

export default SecondaryNav;
