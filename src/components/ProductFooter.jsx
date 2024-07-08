const ProductFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 py-5 md:py-10">
      <span className="text-[8.09px] font-medium text-[#001F3FDB] md:text-xs">
        Showing 12 of 1020
      </span>
      <img
        src="/loading-bar.svg"
        alt="loader indicator"
        className="h-[3.37px] max-md:w-[155px] md:h-[5px]"
      />
      <button className="flex h-[22.24px] w-[136.8px] items-center justify-center bg-primary bg-opacity-[86%] text-[8.09px] font-bold capitalize leading-[10.92px] text-white md:h-[33px] md:w-[203px] md:text-xs md:leading-[16.2px]">
        load more product
      </button>
    </div>
  );
}

export default ProductFooter