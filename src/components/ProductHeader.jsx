const ProductHeader = () => {
  return (
    <>
      <ul className="md:flex hidden h-[55px] items-center justify-center gap-x-[37px] bg-primary text-sm font-medium leading-[18.9px] text-white md:text-xs">
        <li className="border-b-2 pb-1">New Arrivals</li>
        <li className="">Trending Now</li>
        <li className="">Shop by Occasion</li>
        <li className="">Shop by Product</li>
        <li className="">Gifting</li>
        <li className="">Magazine</li>
        <li className="">Sustainability</li>
      </ul>
      <p className="my-10 hidden bg-white text-center text-base font-black uppercase leading-[21.6px] md:block">
        up to 50% fresh finds
      </p>
    </>
  );
};

export default ProductHeader;
