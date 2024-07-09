import CheckoutPersonalInformation from "../components/CheckoutPersonalInformation";
import CheckoutOrderInformation from "../components/CheckoutOrderInformation";
import SecondaryNav from "../components/SecondaryNav";

const Checkout = () => {
  return (
    <>
    <SecondaryNav text={"women"} href={"/women"} />
    <div className="flex flex-col">
      <p className="mb-10 mt-[33px] text-center text-lg font-black uppercase leading-[24.3px] md:mb-14 md:text-2xl md:leading-[32.4px]">
        checkout
      </p>
      <div className="mx-auto flex max-w-[1200px] flex-col justify-center gap-10 max-xl:items-center xl:flex-row">
        <CheckoutPersonalInformation />
        <CheckoutOrderInformation />
      </div>
    </div>
    </>
  );
};

export default Checkout;
