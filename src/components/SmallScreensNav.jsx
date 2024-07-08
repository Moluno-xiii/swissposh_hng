/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { PiShoppingBag } from "react-icons/pi";

const SmallScreensNav = ({handleOpenModal}) => {
  return (
    <nav className="flex h-[52px] flex-row items-center justify-between bg-black px-4 md:hidden">
      <div className="flex flex-row gap-x-2">
        <GiHamburgerMenu onClick={handleOpenModal} />
        <span className="cursor-pointer text-[11.83px] font-bold uppercase leading-[15.72px]">
          <NavLink to="/">swissposh</NavLink>
        </span>
      </div>
      <div className="flex flex-row gap-x-3">
        <GrFavorite />
        <NavLink to="/cart">
          <PiShoppingBag />
        </NavLink>
      </div>
    </nav>
  );
}

export default SmallScreensNav