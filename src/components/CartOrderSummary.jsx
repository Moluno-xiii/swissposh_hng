import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../store/women/womenSlice";
import { selectCartTotalMen } from "../store/men/menSlice";
import formatCurrency from "../utils/formatCurrency";

const CartOrderSummary = () => {
  const total = useSelector(selectCartTotal);
  const menTotal = useSelector(selectCartTotalMen);
  const overallTotal = total + menTotal;
  const shipping = 100.0;
  const totalWithShipping = (overallTotal + shipping).toFixed(2);

  return (
    <div className="flex h-[489px] w-[323px] flex-col bg-primary bg-opacity-[12%] p-[17.21px] text-[9.83px] font-medium leading-[13.27px] text-primary text-opacity-80 md:h-[597px] md:w-[404px] md:bg-opacity-[9%] md:p-5 md:text-xs md:leading-[16.2px]">
      <p className="text-[13.11px] font-bold uppercase leading-[17.7px] md:mb-2 md:text-base md:leading-[21.6px]">
        order summary
      </p>
      <ul className="flex flex-col justify-center gap-y-3 py-5 md:gap-y-6">
        <li className="flex w-[236.08px] flex-row justify-between md:w-[288px]">
          <span>Subtotal</span>
          <span className="font-bold">{formatCurrency(overallTotal.toFixed(2))}</span>
        </li>
        <li className="flex w-[236.08px] flex-row justify-between md:w-[288px]">
          <span>Shipping</span>
          <span className="font-bold">{formatCurrency(shipping)}</span>
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
        <span className="font-bold">{formatCurrency(totalWithShipping)}</span>
      </div>

      <button className="mx-auto h-[33.59px] w-[231.04px] bg-primary text-white max-md:mt-2 max-md:text-[11.47px] max-md:leading-[15.48px] md:h-[41px] md:w-[282px]">
        <NavLink to="/checkout">Proceed to Checkout</NavLink>
      </button>
    </div>
  );
};

export default CartOrderSummary;
