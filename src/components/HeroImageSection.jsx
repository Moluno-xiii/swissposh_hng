/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const HeroImageSection = ({image1, image1_large, alt, href}) => {
  return (
    <div className="relative flex justify-center bg-white">
      <img src={image1} alt={alt} height={70} className="w-full md:hidden" />
      <img
        src={image1_large}
        alt={alt}
        height={702}
        className="hidden w-full md:inline-block"
      />
      <div className="absolute bottom-0 flex h-[107px] w-full flex-col items-center justify-center bg-primary bg-opacity-[62%] text-white md:h-[148px]">
        <span className="text-[7.63px] font-medium uppercase leading-[10.3px] md:text-xs">
          new arrivals
        </span>
        <p className="mb-[12.71px] mt-[8.9px] text-[10.17px] font-black uppercase leading-[13.73px] md:text-base">
          up to 50% off fresh finds
        </p>
        <button className="h-[26.06px] w-[73.09px] rounded-[2.54px] bg-white text-center text-[10.21px] font-medium capitalize leading-[13.73px] text-black md:h-[41px] md:w-[115px] md:text-base">
          <NavLink to={href}>shop now</NavLink>
        </button>
      </div>
    </div>
  );
}

export default HeroImageSection