const ProductFilters = () => {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-x-[1px] md:mx-auto md:max-w-[586px]">
      <div className="flex h-[43px] flex-1 items-center justify-center bg-primary text-xxs uppercase leading-[13.5px] text-white max-md:gap-x-2 md:bg-white md:text-[13px] md:text-primary">
        sort by
        <img
          src="/chevron-down.svg"
          className="inline-block md:hidden"
          alt="arrow down"
        />
        <img
          src="/down-arrow.svg"
          className="hidden md:inline-block"
          alt="arrow down"
        />
      </div>
      <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-primary text-xxs uppercase leading-[13.5px] text-white md:flex md:bg-white md:text-[13px] md:text-primary">
        colour
        <img
          src="/chevron-down.svg"
          className="inline-block md:hidden"
          alt="arrow down"
        />
        <img
          src="/down-arrow.svg"
          className="hidden md:inline-block"
          alt="arrow down"
        />
      </div>
      <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-primary text-xxs uppercase leading-[13.5px] text-white md:flex md:bg-white md:text-[13px] md:text-primary">
        size
        <img
          src="/chevron-down.svg"
          className="inline-block md:hidden"
          alt="arrow down"
        />
        <img
          src="/down-arrow.svg"
          className="hidden md:inline-block"
          alt="arrow down"
        />
      </div>
      <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-primary text-xxs uppercase leading-[13.5px] text-white md:flex md:bg-white md:text-[13px] md:text-primary">
        brand
        <img
          src="/chevron-down.svg"
          className="inline-block md:hidden"
          alt="arrow down"
        />
        <img
          src="/down-arrow.svg"
          className="hidden md:inline-block"
          alt="arrow down"
        />
      </div>
      <div className="hidden h-[43px] flex-1 items-center justify-center gap-x-2 bg-primary text-xxs uppercase leading-[13.5px] text-white md:flex md:bg-white md:text-[13px] md:text-primary">
        patterns
        <img
          src="/chevron-down.svg"
          className="inline-block md:hidden"
          alt="arrow down"
        />
        <img
          src="/down-arrow.svg"
          className="hidden md:inline-block"
          alt="arrow down"
        />
      </div>
      <div className="flex h-[43px] flex-1 items-center justify-center gap-x-2 bg-primary text-xxs uppercase leading-[13.5px] text-white md:bg-white md:text-[13px] md:text-primary">
        <img
          src="/Filter.svg"
          alt="filter"
          className="hidden md:inline-block"
        />
        filters
        <img
          src="/chevron-down.svg"
          alt="arrow down"
          className="inline-block md:hidden"
        />
      </div>
    </div>
  );
}

export default ProductFilters