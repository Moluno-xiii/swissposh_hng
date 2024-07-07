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
      <p className="my-10 hidden bg-white text-center text-base font-black uppercase leading-[21.6px] md:block">
        up to 50% fresh finds
      </p>
    </>
  );
};

export default ProductHeader;
