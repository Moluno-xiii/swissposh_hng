
const DiscountHeader = () => {
  return (
    <div className="flex h-[43px] flex-row text-xxs font-bold leading-[10.8px] md:h-[55px] md:text-xs md:leading-[16.2px]">
      <div className="flex flex-1 items-center justify-center bg-black uppercase text-white">
        up to 50% off fresh finds
      </div>
      <div className="flex flex-1 items-center justify-center bg-white uppercase text-primary text-opacity-70">
        free worldwide delivery
      </div>
    </div>
  );
}

export default DiscountHeader