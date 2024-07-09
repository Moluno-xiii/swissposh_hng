/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SmallScreensNav = ({handleOpenModal}) => {
  return (
    <nav className="flex h-[52px] mb-32 fixed right-0 left-0 z-20 flex-row items-center justify-between bg-black px-4 md:hidden">
      <div className="flex flex-row gap-x-2">
        <img
          src="/hamburger.svg"
          alt="menu icon"
          onClick={handleOpenModal}
        />
        <span className="cursor-pointer text-[11.83px] font-bold uppercase leading-[15.72px]">
          <NavLink to="/">swissposh</NavLink>
        </span>
      </div>
      <div className="flex flex-row gap-x-3">
        <img src="/favourites-icon.svg" alt="favourites icon" />
        <NavLink to="/shopping-bag">
          <img src="/shopping_bag_logo.svg" alt="shopping bag logo" />
        </NavLink>
      </div>
    </nav>
  );
}

export default SmallScreensNav