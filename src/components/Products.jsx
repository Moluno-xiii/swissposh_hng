/* eslint-disable react/prop-types */

const Products = ({ product }) => {
  const { imageUrl, productName } = product;
  return (
    <div className="flex flex-col max-w-[161px] max-h-[285px]">
      <img src={imageUrl} alt="image of the product" />
      <div className="flex h-[68px] flex-row items-center justify-between bg-white border-b border-x px-2">
        <div className="flex flex-col justify-center">
          <p className="text-[7.65px] h-[10px] leading-[10.32px] font-bold">{productName}</p>
          <img
            src="/colour-palette.svg"
            alt="colour palette"
            className="h-[5.1px] w-[22.3px]"
          />
          <span className="text-[6.37px] leading-[8.6px] text-primary">
            $300
          </span>
        </div>
        <p className="text-[6.37px] font-black">New Arrival</p>
      </div>
    </div>
  );
};

export default Products;
