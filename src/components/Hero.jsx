/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Hero = ({alt, image1, image1_large, href}) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex h-[43px] flex-1 items-center justify-center bg-black text-xxs font-bold uppercase leading-[10.8px] text-white md:h-[55px] md:text-xs">
          up to 50% off fresh finds
        </div>
        <div className="flex h-[43px] flex-1 items-center justify-center bg-white text-xxs font-bold uppercase leading-[10.8px] text-[#001F3FB2] md:h-[55px] md:text-xs">
          Free worldwide delivery
        </div>
      </div>
      <div className="flex h-[75px] flex-col items-center justify-center gap-y-[6px] bg-primary text-center text-white md:h-[104px]">
        <p className="h-[16px] text-sm font-bold uppercase leading-[16.2px] md:mb-3 md:text-lg">
          up to 50% off fresh finds
        </p>
        <p className="h-3 text-xxs font-medium leading-[10.8px] md:text-xs">
          Members to get free delivery over every $30 and free returns
        </p>
      </div>
      <div className="relative flex justify-center bg-white">
        <img
          src={image1}
          alt="image of a female model"
          height={70}
          className="w-full md:hidden"
        />
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
    </>
  );
};

export default Hero;
