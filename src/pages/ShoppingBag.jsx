import { cartImagesArray } from "../../array";
import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";

const ShoppingBag = () => {
  return (
    <div className="max-md:bg-primary max-md:bg-opacity-[8%] pb-10">
      <p className="text-center font-black uppercase md:py-10 md:text-2xl md:leading-[32.4px] leading-[21.6px] py-5">
        shopping bag
      </p>
      <div className="flex flex-col max-md:px-4 gap-6 max-lg:items-center lg:flex-row lg:justify-center">
        <ul className="flex md:w-[576px] w-[323px] flex-col gap-y-3">
          {cartImagesArray.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </ul>
        <CartOrderSummary />
      </div>
    </div>
  );
};

export default ShoppingBag;
