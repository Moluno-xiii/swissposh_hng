import { Outlet } from "react-router-dom";

export default function WomenPage() {
  return (
    <div className="">
     
      <div className="flex flex-row">
        <div className="flex h-[43px] flex-1 items-center justify-center bg-black text-xxs font-bold uppercase leading-[10.8px] text-white md:h-[55px] md:text-xs">
          up to 50% off fresh finds
        </div>
        <div className="flex h-[43px] flex-1 items-center justify-center bg-white text-xxs font-bold uppercase leading-[10.8px] text-[#001F3FB2] md:h-[55px] md:text-xs">
          Free worldwide delivery
        </div>
      </div>

      <Outlet />
    </div>
  );
}
