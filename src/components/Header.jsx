import { GiHamburgerMenu } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { PiShoppingBag } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-xs leading-[16.2px] text-white">
      <nav className="hidden text-xs bg-black md:flex h-[70px] items-center justify-between px-6">
        <ul className="flex flex-row items-center gap-x-7">
          <li>Customer Service</li>
          <li>Store Locator</li>
          <li>News Letter</li>
        </ul>
        <span className="text-lg font-bold uppercase font-futura">
          swissposh
        </span>
        <ul className="flex flex-row items-center gap-x-7">
          <li className="">Sign in</li>
          <li>Favourites (0)</li>
          <li>Shopping Bag</li>
        </ul>
      </nav>
      <nav className="flex h-[52px] flex-row items-center justify-between bg-black px-4 md:hidden">
        <div className="flex flex-row gap-x-2">
          <GiHamburgerMenu />
          <span className="text-[11.83px] font-bold uppercase leading-[15.72px] font-futura">
            <NavLink to="/">

            swissposh
            </NavLink>
          </span>
        </div>
        <div className="flex flex-row gap-x-3">
          <GrFavorite />
          <PiShoppingBag />
        </div>
      </nav>
    </header>
  );
}
