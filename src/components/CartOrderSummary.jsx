import { NavLink } from "react-router-dom";

const CartOrderSummary = () => {
  return (
    <div className="flex h-[489px] w-[323px] flex-col bg-primary bg-opacity-[12%] p-[17.21px] text-[9.83px] font-medium leading-[13.27px] text-primary text-opacity-80 md:h-[597px] md:w-[404px] md:bg-opacity-[9%] md:p-5 md:text-xs md:leading-[16.2px]">
      <p className="md:mb-2 text-[13.11px] font-bold uppercase leading-[17.7px] md:text-base md:leading-[21.6px]">
        order summary
      </p>
      <ul className="flex flex-col justify-center gap-y-3 md:gap-y-6 py-5">
        <li className="flex w-[236.08px] flex-row justify-between md:w-[288px]">
          <span>Subtotal</span>
          <span className="font-bold">$1200.00</span>
        </li>
        <li className="flex w-[236.08px] flex-row justify-between md:w-[288px]">
          <span>Shipping</span>
          <span className="font-bold">$100.00</span>
        </li>
        <li className="flex flex-row justify-between">
          <span>Tax</span>
          <span>Calculated In Checkout</span>
        </li>
      </ul>
      <div className="flex h-[50px] items-center justify-between border-y border-white">
        <span className="self text-sm font-bold leading-[18.9px]">
          PromoCode
        </span>
        <img src="/down-arrow.svg" alt="arrow down icon" />
      </div>
      <div className="flex w-[288px] flex-row justify-between py-3 md:py-5">
        <span>Estimated Total</span>
        <span className="font-bold">$1300.00</span>
      </div>

      <button className="mx-auto max-md:mt-2 h-[33.59px] w-[231.04px] bg-primary text-white max-md:text-[11.47px] max-md:leading-[15.48px] md:h-[41px] md:w-[282px]">
        <NavLink to="/checkout" >
        Proceed to Checkout
        </NavLink>
      </button>
    </div>
  );
};

export default CartOrderSummary;
