/* eslint-disable react/prop-types */

const Products = ({ product }) => {
  const { imageUrl, productName, largeImageUrl } = product;
  return (
    <div className="flex max-h-[285px] max-w-[161px] flex-col md:max-h-[502px] md:max-w-[232px]">
      <img
        src={imageUrl}
        alt="image of the product"
        className="inline-block md:hidden"
      />
      <img
        src={largeImageUrl}
        alt="image of the product"
        className="hidden md:inline-block"
      />
      <div className="flex h-[68px] flex-row items-center justify-between  bg-white px-2">
        <div className="flex flex-col justify-center gap-y-1 md:gap-y-2">
          <p className="h-[10px] text-[7.65px] font-bold leading-[10.32px] md:text-xs">
            {productName}
          </p>
          <img
            src="/colour-palette.svg"
            alt="colour palette"
            className="h-[5.1px] w-[22.3px] md:h-2 md:w-[35px]"
          />
          <span className="text-[6.37px] md:text-[10px] leading-[8.6px] text-primary">
            $300
          </span>
        </div>
        <p className="text-[6.37px] font-black md:text-[10px]">New Arrival</p>
      </div>
    </div>
  );
};

export default Products;