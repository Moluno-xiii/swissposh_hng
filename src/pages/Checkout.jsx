const Checkout = () => {
  return (
    <div className="flex flex-col">
      <p className="mb-10 mt-[33px] text-center text-lg font-black uppercase leading-[24.3px] md:mb-14 md:text-2xl md:leading-[32.4px]">
        checkout
      </p>
      <div className="mx-auto flex max-w-[1200px] flex-col justify-center gap-10 max-xl:items-center xl:flex-row">
        <div className="w-[327px] md:w-[680px]">
          <div className="flex h-[46px] flex-row items-center justify-start bg-primary px-4 text-xs uppercase text-white md:px-6">
            Your information
          </div>
          <form
            action=""
            className="h-[396px] border-x border-b border-[#00000040] bg-white px-4 text-black md:h-[519px] md:px-6 md:pt-6"
          >
            <div className="mb-5 hidden flex-col gap-y-6 text-xs font-medium leading-[16.2px] text-black md:flex">
              <span className="">Email Address</span>
              <span>Wakaoluuwajuwon@watlook.com</span>
            </div>
            <div className="mb-6 flex flex-col gap-y-2 max-md:pt-5">
              <label
                className="text-[10px] leading-[13.5px]"
                htmlFor="password"
              >
                Password <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
                id="password"
              />
            </div>
            <div className="mb-6 flex flex-col gap-y-2">
              <label
                className="text-[10px] leading-[13.5px]"
                htmlFor="firstName"
              >
                First Name <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
                id="firstName"
              />
            </div>
            <div className="mb-6 flex flex-col gap-y-2">
              <label
                className="text-[10px] leading-[13.5px]"
                htmlFor="lastName"
              >
                Last Name <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
                id="lastName"
              />
            </div>
            <div className="mb-6 flex flex-col gap-y-2">
              <label
                className="text-[10px] leading-[13.5px]"
                htmlFor="phoneNumber"
              >
                Phone Number <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
                id="phoneNumber"
              />
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-2 accent-black"
                checked={true}
              />
              <span>Wakaoluuwajuwon@watlook.com</span>
            </div>
          </form>
        </div>

        <div className="mb-7 flex w-[327px] flex-col md:w-[456px]">
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
            <span className="py-4 font-medium text-[10px] max-md:text-center md:text-xs leading-6">
              By continuing, you agree to SWISSPOSH General Terms and
              Conditions. We will process your personal data in accordance with
              the H&Ms Privacy Notice.
            </span>
            <button className="flex items-center justify-center bg-[#E4E4E4] font-medium h-[38px] w-[249px] mx-auto md:w-[403px] text-xs">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
