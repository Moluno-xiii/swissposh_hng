import CheckoutPersonalInformation from "../components/CheckoutPersonalInformation";
import CheckoutOrderInformation from "../components/CheckoutOrderInformation";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../store/women/womenSlice";
import { selectCartTotalMen } from "../store/men/menSlice";

const Checkout = () => {
  const total = useSelector(selectCartTotal);
  const menTotal = useSelector(selectCartTotalMen);
  const overallTotal = total + menTotal;
  const shipping = 100.0;
  const totalWithShipping = (overallTotal + shipping).toFixed(2);

  if (overallTotal <= 0)
    return (
      <div className="mx-auto h-[100dvh] w-[200px]">your cart is empty</div>
    );
  return (
    <>
      <div className="flex flex-col">
        <p className="mb-10 mt-[33px] text-center text-lg font-black uppercase leading-[24.3px] md:mb-14 md:text-2xl md:leading-[32.4px]">
          checkout
        </p>
        <div className="mx-auto flex max-w-[1200px] flex-col justify-center gap-10 max-xl:items-center xl:flex-row">
          <CheckoutPersonalInformation />
          <CheckoutOrderInformation
            overallTotal={overallTotal}
            shipping={shipping}
            totalWithShipping={totalWithShipping}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
