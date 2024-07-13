import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";
import SecondaryNav from "../components/SecondaryNav";
import { useSelector } from "react-redux";

const ShoppingBag = () => {
    const cart = useSelector((state) => state.women.cart);
  return (
    <>
      <SecondaryNav href={"/women"} text={"women"} />
      <div className="pb-10 max-md:bg-primary max-md:bg-opacity-[8%]">
        <p className="py-5 text-center font-black uppercase leading-[21.6px] md:py-10 md:text-2xl md:leading-[32.4px]">
          cart
        </p>
        <div className="flex flex-col gap-6 max-lg:items-center max-md:px-4 lg:flex-row lg:justify-center">
          <ul className="flex w-[323px] flex-col gap-y-3 md:w-[576px]">
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </ul>
          <CartOrderSummary />
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
