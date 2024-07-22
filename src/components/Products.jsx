/* eslint-disable react/prop-types */
import { Suspense } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const Products = ({ product, route }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`${route}${product.id}`);
  };

  return (
    <div className="flex max-h-[285px] max-w-[161px] flex-col md:max-h-[502px] md:max-w-[232px]">
      <Suspense fallback={<Loader />}>
        <img
          src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
          alt="image of the product"
          className="inline-block h-[161px] w-[217px] md:hidden"
          onClick={handleNavigation}
        />
        <img
          src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
          alt="image of the product"
          className="hidden h-[437px] w-full md:inline-block"
          onClick={handleNavigation}
        />
      </Suspense>
      <div className="flex h-[68px] flex-row items-center justify-between bg-white px-2">
        <div className="flex flex-col justify-center gap-y-1 md:gap-y-2">
          <p className="h-[10px] text-[7.65px] font-bold leading-[10.32px] md:text-xs">
            {product.name}
          </p>
          <img
            src="/colour-palette.svg"
            alt="colour palette"
            className="h-[5.1px] w-[22.3px] md:h-2 md:w-[35px]"
          />
          <span className="text-[6.37px] leading-[8.6px] text-primary md:text-[10px]">
            ${product?.current_price[0]?.NGN[0]}
          </span>
          <button
            className="w-[100px] rounded-sm bg-primary bg-opacity-20 text-xs md:rounded-md md:text-sm"
            onClick={handleNavigation}
          >
            view item
          </button>
        </div>
        <p className="text-[6.37px] font-black md:text-[10px]">New Arrival</p>
      </div>
    </div>
  );
};

export default Products;
