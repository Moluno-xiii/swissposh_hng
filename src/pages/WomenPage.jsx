export default function WomenPage() {
  return (
    <div className="">
      <div className="flex h-[55px] items-center justify-center bg-[#5A6D81] text-sm font-bold uppercase leading-[18.9px] text-white">
        women
      </div>
      <div className="flex flex-row">
        <div className="text-xxs flex h-[43px] flex-1 items-center justify-center bg-black uppercase leading-[10.8px] text-white">
          up to 50% off fresh finds
        </div>
        <div className="text-primary text-xxs flex h-[43px] flex-1 items-center justify-center bg-white uppercase leading-[10.8px] text-opacity-70">
          up to 50% off fresh finds
        </div>
      </div>
      <div className="bg-primary flex h-[75px] flex-col items-center justify-center gap-y-[6px] text-center text-white">
        <p className="h-[16px] text-sm font-bold uppercase leading-[16.2px]">
          up to 50% off fresh finds
        </p>
        <p className="text-xxs h-3 font-medium leading-[10.8px]">
          Members to get free delivery over every $30 and free returns
        </p>
      </div>
      <div className="relative">
        <img
          src="/woman_1.png"
          alt="image of a woman"
          height={407}
          className="w-full"
        />
        <div className="bg-primary absolute bottom-0 flex h-[107px] w-[100vw] flex-col items-center justify-center bg-opacity-[62%] text-white">
          <span className="text-[7.63px] font-medium uppercase leading-[10.3px]">
            new arrivals
          </span>
          <p className="mb-[12.71px] mt-[8.9px] text-[10.17px] font-black uppercase leading-[13.73px]">
            up to 50% off fresh finds
          </p>
          <button className="h-[26.06px] w-[73.09px] rounded-[2.54px] bg-white text-center text-[10.21px] font-medium capitalize leading-[13.73px] text-black">
            shop now
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-row items-center justify-center">
          <img
            src="/woman_2.png"
            alt="image of a female model"
            height={414.54}
            // width={267.02}
            className="flex-1"
          />
          <img
            src="/woman_3.png"
            alt="image of a female model"
            height={414.54}
            // width={267.02}
            className="flex-1"
          />
        </div>
        <div className="absolute bottom-0 flex h-[107px] w-[100vw] flex-col items-center justify-center bg-transparent bg-opacity-[62%] text-white">
          <span className="text-[7.63px] font-medium uppercase leading-[10.3px]">
            new arrivals
          </span>
          <p className="mb-[12.71px] mt-[8.9px] text-[10.17px] font-black uppercase leading-[13.73px]">
            up to 50% off fresh finds
          </p>
          <button className="h-[26.06px] w-[73.09px] rounded-[2.54px] bg-white text-center text-[10.21px] font-medium capitalize leading-[13.73px] text-black">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
}
