import { womenProductsArray } from "../../array";
import Products from "../components/Products";

const NewArrivalWomen = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex items-center justify-center gap-x-1">
        <div className="bg-white text-xxs uppercase leading-[13.5px] text-primary flex-1 flex justify-center gap-x-2 items-center h-[43px]">
          sort by
          <img src="/public/down-arrow.svg" alt="arrow down" />
        </div>
        <div className="bg-white text-xxs uppercase leading-[13.5px] text-primary flex-1 flex justify-center gap-x-2 items-center h-[43px]">
          filters
          <img src="/public/down-arrow.svg" alt="arrow down" />
        </div>
      </div>

      <div className="mx-auto grid max-w-[327px] grid-cols-2 items-center justify-items-center gap-2 p-4">
        {womenProductsArray.map((product, index) => (
          <Products product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalWomen;
