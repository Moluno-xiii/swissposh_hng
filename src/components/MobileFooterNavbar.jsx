import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const MobileFooterNavbar = () => {
  return (
    <nav className="fixed bottom-[5px] left-2 z-40 w-[95vw] sm:hidden">
      <ul className="flex w-full flex-row justify-between rounded-lg bg-black px-4 py-2">
        <li className="flex flex-col gap-y-1 text-white">
          <NavLink to="/">
            <CiSearch className="h-[20px] w-[22px]" />
            <span className="text-[10px] font-medium leading-[11.68px]">
              explore
            </span>
          </NavLink>
        </li>
        <li className="flex flex-col gap-y-1 text-white">
          <NavLink to="#">
            <img src="/favourite.svg" alt="favourites icon" />
            <span className="text-[10px] font-medium leading-[11.68px]">
              favourite
            </span>
          </NavLink>
        </li>
        <li className="flex flex-col gap-y-1">
          <NavLink
            to="/shopping-bag"
            className={({ isActive }) =>
              isActive ? "text-[#FFC633] capitalize font-bold" : "text-white"
            }
          >
            <CiCirclePlus className="h-[20px] w-[22px]" />
            <span className="text-[10px] font-medium leading-[11.68px]">
              cart
            </span>
          </NavLink>
        </li>
        <li className="flex flex-col gap-y-1 text-white">
          <NavLink to="#">
            <img src="/hands_icon.svg" alt="fresh finds icon" />
            <span className="text-[10px] font-medium leading-[11.68px]">
              fresh finds
            </span>
          </NavLink>
        </li>
        <li className="flex flex-col gap-y-1 text-white">
          <NavLink to="#">
            <img src="/profile_icon.svg" alt="profile icon" />
            <span className="text-[10px] font-medium leading-[11.68px]">
              profile
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileFooterNavbar;
