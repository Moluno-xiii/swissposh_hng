const CheckoutOrderInformation = () => {
  return (
    <div className="mb-14 flex w-[327px] flex-col md:mb-7 md:w-[456px]">
      <p className="flex h-[46px] flex-row items-center justify-start bg-primary px-4 text-xs uppercase text-white md:px-6">
        Order information
      </p>
      <div className="flex h-[396px] flex-col border-x border-b border-[#00000040] px-6 pt-6 md:h-[519px]">
        <div className="flex flex-row justify-between border-b-2 border-black py-3">
          <span>Discount</span>
          <span>Apply Discount</span>
        </div>
        <div className="flex flex-col gap-y-3 border-b-2 border-black py-4">
          <div className="flex flex-row justify-between">
            <span>Total Order Price</span>
            <span>$1200.00</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>Delivery</span>
            <span>$400</span>
          </div>
        </div>
        <div className="flex flex-row justify-between py-4 font-medium text-black md:text-xs md:leading-[16.2px]">
          <span>Total</span>
          <span>$1600.00</span>
        </div>
        <span className="py-4 text-[10px] font-medium leading-6 max-md:text-center md:text-xs">
          By continuing, you agree to SWISSPOSH General Terms and Conditions. We
          will process your personal data in accordance with the H&Ms Privacy
          Notice.
        </span>
        <button className="mx-auto flex h-[38px] w-[249px] items-center justify-center bg-[#E4E4E4] text-xs font-medium md:w-[403px]">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default CheckoutOrderInformation