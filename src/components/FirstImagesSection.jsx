import { NavLink } from "react-router-dom";

const FirstImagesSection = () => {
  return (
    <div className="my-6 flex flex-col gap-y-6">
      <div className="mx-auto max-h-[430px] max-w-[678px] md:max-h-[530px]">
        <div className="mx-6 flex h-full flex-row items-center justify-center">
          <img
            src="/woman_2.png"
            alt="image of a female model"
            className="h-full w-full flex-1 md:hidden"
          />
          <img
            src="/public/woman_2_large.png"
            alt="image of a female model"
            className="hidden h-full w-full flex-1 md:inline-block"
          />
          <img
            src="/public/woman_3_large.png"
            alt="image of a female model"
            className="hidden h-full w-full flex-1 md:inline-block"
          />
          <img
            src="/woman_3.png"
            alt="image of a female model"
            className="h-full w-full flex-1 md:hidden"
          />
        </div>
        <div className="flex h-[107px] -translate-y-32 flex-col items-center justify-center bg-transparent bg-opacity-[62%] text-white md:h-[113px] md:w-full">
          <span className="text-[7.63px] font-medium uppercase leading-[10.3px] md:text-xs">
            new arrivals
          </span>
          <p className="mb-[12.71px] mt-[8.9px] text-[10.17px] font-black uppercase leading-[13.73px] md:text-base">
            up to 50% off fresh finds
          </p>
          <button className="h-[26.06px] w-[73.09px] rounded-[2.54px] bg-white text-center text-[10.21px] font-medium capitalize leading-[13.73px] text-black md:h-[41px] md:w-[115px] md:text-base">
            <NavLink to="new-arrivals">shop now</NavLink>
          </button>
        </div>
      </div>

      <div className="mx-auto max-h-[430px] max-w-[678px] md:max-h-[530px]">
        <div className="mx-auto flex h-[414px] max-w-[327px] flex-row items-center justify-center md:h-[515.18px] md:max-w-[678px]">
          <img
            src="/woman_4.png"
            alt="image of a female model"
            className="h-full w-full flex-1 md:hidden"
          />
          <img
            src="/public/woman_4_large.png"
            alt="image of a female model"
            className="hidden h-full w-full flex-1 md:inline-block"
          />
          <img
            src="/public/woman_5_large.png"
            alt="image of a female model"
            className="hidden h-full w-full flex-1 md:inline-block"
          />
          <img
            src="/woman_5.png"
            alt="image of a female model"
            className="h-full w-full flex-1 md:hidden"
          />
        </div>
        <div className="flex h-[107px] w-full -translate-y-32 flex-col items-center justify-center bg-transparent bg-opacity-[62%] text-white max-sm:w-[100vw]">
          <span className="text-[7.63px] font-medium uppercase leading-[10.3px] md:text-xs">
            Sculpted in denim
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

export default FirstImagesSection;
