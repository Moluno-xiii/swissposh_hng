import { GiHamburgerMenu } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { PiShoppingBag } from "react-icons/pi";

export default function Header() {
  return (
    <header className="text-xs leading-[16.2px] text-white">
      <nav className="hidden lg:flex">
        <ul className="flex flex-row items-center gap-x-7">
          <li>Customer Service</li>
          <li>Store Locator</li>
          <li>News Letter</li>
        </ul>
        <span className="flex-1 text-5xl uppercase text-blue-400">
          swissposh
        </span>
        <ul className="flex flex-row items-center gap-x-7">
          <li className="text-blue-400">Sign in</li>
          <li>Favourites (0)</li>
          <li>Shopping Bag</li>
        </ul>
      </nav>
      <nav className="flex h-[52px] flex-row items-center justify-between bg-black px-4 lg:hidden">
        <div className="flex flex-row gap-x-2">
          <GiHamburgerMenu />
          <span className="text-[11.83px] font-bold uppercase leading-[15.72px] font-futura">
            swissposh
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
