/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

// const dummyId = "0617d4bcae974fb38ffc4a3361979182";
// const dummyId = "888b692bad7d47f881cd6a79f077589d";
const dummyId = "8d7878b38f164498a6b5a7d291b82149";

const Products = ({ product, route }) => {
  const { imageUrl, productName, largeImageUrl } = product;
  const navigate = useNavigate()
  return (
    <div className="flex max-h-[285px] max-w-[161px] flex-col md:max-h-[502px] md:max-w-[232px]">
      <img
        src={imageUrl}
        alt="image of the product"
        className="inline-block md:hidden"
        onClick={() => navigate(`${route}${dummyId}`)}
      />
      <img
        src={largeImageUrl}
        alt="image of the product"
        className="hidden md:inline-block"
        onClick={() => navigate(`${route}${dummyId}`)}
      />
      <div className="flex h-[68px] flex-row items-center justify-between bg-white px-2">
        <div className="flex flex-col justify-center gap-y-1 md:gap-y-2">
          <p className="h-[10px] text-[7.65px] font-bold leading-[10.32px] md:text-xs">
            {productName}
          </p>
          <img
            src="/colour-palette.svg"
            alt="colour palette"
            className="h-[5.1px] w-[22.3px] md:h-2 md:w-[35px]"
          />
          <span className="text-[6.37px] leading-[8.6px] text-primary md:text-[10px]">
            $300
          </span>
          <button
            className="rounded-sm bg-primary bg-opacity-20 text-xs md:rounded-md md:text-sm"
            onClick={() => navigate("/shopping-bag")}
          >
            add to cart
          </button>
        </div>
        <p className="text-[6.37px] font-black md:text-[10px]">New Arrival</p>
      </div>
    </div>
  );
};

export default Products;
