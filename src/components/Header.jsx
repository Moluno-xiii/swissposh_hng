import { GiHamburgerMenu } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { PiShoppingBag } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <header className="text-xs leading-[16.2px] text-white">
      <nav className="hidden h-[70px] items-center justify-between bg-black px-6 text-xs md:flex">
        <ul className="flex flex-row items-center gap-x-7">
          <li className=" cursor-pointer">Customer Service</li>
          <li className=" cursor-pointer">Store Locator</li>
          <li className=" cursor-pointer">News Letter</li>
        </ul>
        <span className="w-[118px] cursor-pointer text-lg font-bold uppercase">
          <NavLink to="/">swissposh</NavLink>
        </span>
        <ul className="flex flex-row items-center gap-x-7">
          <li className="">Sign in</li>
          <li className=" cursor-pointer">Favourites (0)</li>
          <li className=" cursor-pointer">Shopping Bag</li>
        </ul>
      </nav>
      <nav className="flex h-[52px] flex-row items-center justify-between bg-black px-4 md:hidden">
        <div className="flex flex-row gap-x-2">
          <GiHamburgerMenu onClick={handleOpenModal} />
          <span className="cursor-pointer text-[11.83px] font-bold uppercase leading-[15.72px]">
            <NavLink to="/">swissposh</NavLink>
          </span>
        </div>
        <div className="flex flex-row gap-x-3">
          <GrFavorite />
<NavLink to='/checkout'>
<PiShoppingBag />
</NavLink>
          
        </div>
      </nav>
     {isOpen && <Modal onClose={handleCloseModal} />}
      <ul className="flex h-[55px] items-center justify-center gap-x-[37px] bg-[#5A6D81] text-sm font-medium capitalize leading-[18.9px] text-white md:text-xs">
        <li className="max-md:font-bold max-md:uppercase md:border-b-2">
          Women
        </li>
        <li className="hidden md:inline-block  cursor-pointer">Men</li>
        <li className="hidden md:inline-block  cursor-pointer">Baby</li>
        <li className="hidden md:inline-block  cursor-pointer">Kids</li>
        <li className="hidden md:inline-block  cursor-pointer">Beauty</li>
        <li className="hidden md:inline-block  cursor-pointer">Sport</li>
        <li className="hidden md:inline-block  cursor-pointer">Sale</li>
        <li className="hidden md:inline-block  cursor-pointer">Sustainability</li>
      </ul>
    </header>
  );
}
