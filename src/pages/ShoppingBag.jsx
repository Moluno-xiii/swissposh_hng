import { cartImagesArray } from "../../array";
import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";

const ShoppingBag = () => {
  return (
    <div className="md:mb-10">
      <p className="text-center font-black uppercase md:py-10 md:text-2xl md:leading-[32.4px]">
        shopping bag
      </p>
      <div className="flex flex-col gap-6 max-lg:items-center lg:flex-row lg:justify-center">
        <ul className="flex w-[576px] flex-col gap-y-3">
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
