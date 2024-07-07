import { womenProductsArray } from "../../array";
import Products from "../components/Products";

const NewArrivalWomen = () => {
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
      <div className="flex flex-row">
        <div className="flex h-[43px] flex-1 items-center justify-center bg-black text-xxs font-bold uppercase leading-[10.8px] text-white md:h-[55px] md:text-xs">
          up to 50% off fresh finds
        </div>
        <div className="flex h-[43px] flex-1 items-center justify-center bg-white text-xxs font-bold uppercase leading-[10.8px] text-[#001F3FB2] md:h-[55px] md:text-xs">
          Free worldwide delivery
        </div>
      </div>
      <ul className="flex h-[55px] items-center justify-center gap-x-[37px] bg-primary text-sm font-medium leading-[18.9px] text-white md:text-xs">
        <li className="max-md:font-bold max-md:uppercase md:border-b-2">
          New Arrivals
        </li>
        <li className="hidden md:inline-block">Trending Now</li>
        <li className="hidden md:inline-block">Shop by Occasion</li>
        <li className="hidden md:inline-block">Shop by Product</li>
        <li className="hidden md:inline-block">Gifting</li>
        <li className="hidden md:inline-block">Magazine</li>
        <li className="hidden md:inline-block">Sustainability</li>
      </ul>
      <p className="hidden text-center my-10 leading-[21.6px] bg-white text-base font-black uppercase md:block">
        up to 50% fresh finds
      </p>

      <div className="mt-5 flex max-w-[586px] cursor-pointer items-center justify-center gap-x-1 md:mx-auto">
        <div className="flex h-[43px] flex-1 items-center justify-center bg-white text-xxs uppercase leading-[13.5px] text-primary max-md:gap-x-2 md:text-[13px]">
          sort by
          <img src="/down-arrow.svg" alt="arrow down" />
        </div>
        <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-white text-xxs uppercase leading-[13.5px] text-primary md:flex md:text-[13px]">
          colour
          <img src="/down-arrow.svg" alt="arrow down" />
        </div>
        <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-white text-xxs uppercase leading-[13.5px] text-primary md:flex md:text-[13px]">
          size
          <img src="/down-arrow.svg" alt="arrow down" />
        </div>
        <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-white text-xxs uppercase leading-[13.5px] text-primary md:flex md:text-[13px]">
          brand
          <img src="/down-arrow.svg" alt="arrow down" />
        </div>
        <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-white text-xxs uppercase leading-[13.5px] text-primary md:flex md:text-[13px]">
          patterns
          <img src="/down-arrow.svg" alt="arrow down" />
        </div>
        <div className="flex h-[43px] flex-1 items-center justify-center gap-x-2 bg-white text-xxs uppercase leading-[13.5px] text-primary md:text-[13px]">
          <img
            src="/Filter.svg"
            alt="filter"
            className="hidden md:inline-block"
          />
          filters
          <img
            src="/down-arrow.svg"
            alt="arrow down"
            className="inline-block md:hidden"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-[327px] grid-cols-2 items-center justify-items-center gap-2 p-4 md:max-w-[748px] md:grid-cols-3 md:gap-[26px] lg:max-w-[1006px] lg:grid-cols-4">
        {womenProductsArray.map((product, index) => (
          <Products product={product} key={index} />
        ))}
      </div>

      <div className="mt-5 flex flex-col items-center justify-center gap-y-2 md:mt-10">
        <span className="text-[8.09px] font-medium text-[#001F3FDB] md:text-xs">
          Showing 12 of 1020
        </span>
        <img
          src="/public/loading-bar.svg"
          alt="loader indicator"
          className="h-[3.37px] max-md:w-[155px] md:h-[5px]"
        />
        <button className="flex h-[22.24px] w-[136.8px] items-center justify-center bg-primary bg-opacity-[86%] text-[8.09px] font-bold capitalize leading-[10.92px] text-white md:h-[33px] md:w-[203px] md:text-xs md:leading-[16.2px]">
          load more product
        </button>
      </div>
    </div>
  );
};

export default NewArrivalWomen;
