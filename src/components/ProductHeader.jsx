const ProductHeader = () => {
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
      <p className="my-10 hidden bg-white text-center text-base font-black uppercase leading-[21.6px] md:block">
        up to 50% fresh finds
      </p>
    </>
  );
};

export default ProductHeader;
