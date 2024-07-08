import { NavLink } from "react-router-dom";
const LargeScreensNav = () => {
  return (
    <nav className="hidden h-[70px] items-center justify-between bg-black px-6 text-xs md:flex">
      <ul className="flex flex-row items-center gap-x-7">
        <li className="cursor-pointer">Customer Service</li>
        <li className="cursor-pointer">Store Locator</li>
        <li className="cursor-pointer">News Letter</li>
      </ul>
      <span className="w-[118px] cursor-pointer text-lg font-bold uppercase">
        <NavLink to="/">swissposh</NavLink>
      </span>
      <ul className="flex flex-row items-center gap-x-7">
        <li className="">Sign in</li>
        <li className="cursor-pointer">Favourites (0)</li>
        <li className="cursor-pointer">
          <NavLink to="shopping-bag">Shopping Bag</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LargeScreensNav