import { NavLink } from "react-router-dom";

const SecondImagesSection = () => {
  return (
    <div className="my-6 flex flex-col gap-y-6">
      <div className="relative">
        <div className="mx-6 flex h-[414px] max-w-[678px] flex-row items-center justify-center md:mx-auto md:h-[515px]">
          <img
            src="/woman_6.png"
            alt="image of a female model"
            className="h-full md:hidden"
          />
          <img
            src="/woman_6_large.png"
            alt="image of a female model"
            className="hidden h-full md:inline-block"
          />
        </div>
        <div className="absolute bottom-0 mb-5 flex h-[107px] w-[100vw] flex-col items-center justify-center bg-transparent bg-opacity-[62%] text-white md:text-xs">
          <span className="text-[7.63px] font-medium uppercase leading-[10.3px]">
            Dazzling adornments
          </span>
          <p className="mb-[12.71px] mt-[8.9px] text-[10.17px] font-black uppercase leading-[13.73px] md:text-base">
            up to 50% off fresh finds
          </p>
          <button className="h-[26.06px] w-[73.09px] rounded-[2.54px] bg-white text-center text-[10.21px] font-medium capitalize leading-[13.73px] text-black md:h-[41px] md:w-[115px] md:text-base">
            <NavLink to="new-arrivals">shop now</NavLink>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="mx-6 flex h-[414px] max-w-[678px] flex-row items-center justify-center md:mx-auto md:h-[515px]">
          <img
            src="/woman_7.png"
            alt="image of a female model"
            className="h-full md:hidden"
          />
          <img
            src="/woman_7_large.png"
            alt="image of a female model"
            className="hidden h-full md:inline-block"
          />
        </div>
        <div className="absolute bottom-0 mb-5 flex h-[107px] w-full flex-col items-center justify-center bg-transparent bg-opacity-[62%] text-white max-sm:w-[100vw]">
          <span className="text-[7.63px] font-medium uppercase leading-[10.3px] md:text-xs">
            effortless elegance
          </span>
          <p className="mb-[12.71px] mt-[8.9px] text-[10.17px] font-black uppercase leading-[13.73px] md:text-base">
            up to 50% off fresh finds
          </p>
          <button className="h-[26.06px] w-[73.09px] rounded-[2.54px] bg-white text-center text-[10.21px] font-medium capitalize leading-[13.73px] text-black md:h-[41px] md:w-[115px] md:text-base">
            <NavLink to="new-arrivals">shop now</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondImagesSection;
