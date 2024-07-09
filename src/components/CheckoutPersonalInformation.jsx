const CheckoutPersonalInformation = () => {
  return (
    <div className="w-[327px] md:w-[680px]">
      <div className="flex h-[46px] flex-row items-center justify-start bg-black px-4 text-[10px] uppercase leading-[13.5px] text-white md:px-6 md:text-xs md:leading-[16.2px]">
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
          <label className="text-[10px] leading-[13.5px]" htmlFor="password">
            Password <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="password"
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="firstName">
            First Name <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="firstName"
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="lastName">
            Last Name <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="lastName"
          />
        </div>
        <div className="mb-6 flex flex-col gap-y-2">
          <label className="text-[10px] leading-[13.5px]" htmlFor="phoneNumber">
            Phone Number <span className="text-pink-400">*</span>
          </label>
          <input
            type="text"
            className="h-[39px] border border-[#00000080] px-4 focus:outline-none"
            id="phoneNumber"
          />
        </div>
        <div>
          <input type="checkbox" className="mr-2 accent-black" checked={true} />
          <span className="font-medium leading-[16.2px] text-xs">
            Wakaoluuwajuwon@watlook.com
          </span>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPersonalInformation