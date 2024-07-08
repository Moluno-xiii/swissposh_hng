const CartOrderSummary = () => {
  return (
      <div className="flex w-[404px] flex-col bg-primary bg-opacity-[9%] text-xs font-medium leading-[16.2px] text-primary text-opacity-80 md:h-[597px] md:p-5">
        <p className="font-bold text-base uppercase leading-[21.6px] mb-2">order summary</p>
        <ul className="flex flex-col justify-center py-5 gap-y-6">
          <li className="flex w-[288px] flex-row justify-between">
            <span>Subtotal</span>
            <span>$1200.00</span>
          </li>
          <li className="flex w-[288px] flex-row justify-between">
            <span>Shipping</span>
            <span>$100.00</span>
          </li>
          <li className="flex flex-row justify-between">
            <span>Tax</span>
            <span>Calculated In Checkout</span>
          </li>
        </ul>
        <div className="flex h-[50px] items-center justify-between border-y border-white">
          <span className="text-sm font-bold leading-[18.9px] self">PromoCode</span>
          <img src="/down-arrow.svg" alt="arrow down icon" />
        </div>
        <div className="flex flex-row justify-between py-5 w-[288px]">
          <span>Estimated Total</span>
          <span>$1300.00</span>
        </div>

        <button className="bg-primary mx-auto text-white md:h-[41px] md:w-[282px]">
          Proceed to Checkout
        </button>
      </div>
  );
};

export default CartOrderSummary;
