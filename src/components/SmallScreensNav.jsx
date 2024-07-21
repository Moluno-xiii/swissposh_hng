/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import UseGetCart from "../utils/UseGetCart";

const SmallScreensNav = ({handleOpenModal}) => {
  const {newCart} = UseGetCart()
  return (
    <nav className="fixed left-0 right-0 z-20 mb-32 flex h-[52px] flex-row items-center justify-between bg-black px-4 md:hidden">
      <div className="flex flex-row gap-x-2">
        <img src="/hamburger.svg" alt="menu icon" onClick={handleOpenModal} />
        <span className="cursor-pointer text-[11.83px] font-bold uppercase leading-[15.72px]">
          <NavLink to="/">swissposh</NavLink>
        </span>
      </div>
      <div className="flex flex-row gap-x-3">
        <img src="/favourites-icon.svg" alt="favourites icon" />
        <NavLink to="/shopping-bag" className="flex flex-row gap-x-1">
          <img src="/shopping_bag_logo.svg" alt="shopping bag logo" />{" "}
          <span> ({newCart.length})</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default SmallScreensNav