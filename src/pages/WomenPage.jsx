import HeroSection from "../components/Hero";
import FirstImagesSection from "../components/FirstImagesSection";
import SecondImagesSection from "../components/SecondImagesSection";
export default function WomenPage() {
  return (
    <div className="">
      <div className="flex h-[55px] items-center justify-center bg-[#5A6D81] text-sm font-bold uppercase leading-[18.9px] text-white">
        women
      </div>
      <HeroSection />

      <FirstImagesSection />

      <div className="flex h-[94px] flex-col items-center justify-center gap-y-[6px] bg-primary bg-opacity-[62%] text-center text-[#FFFFFFDE] md:h-[104px]">
        <p className="h-[19px] text-[13.7px] font-black uppercase leading-[18.5px] md:h-[32px] md:text-2xl">
          up to 50% off fresh finds
        </p>
        <p className="text-[6.85px] font-medium leading-[9.25px] md:h-4 md:text-xs">
          Members to get free delivery over every $30 and free returns
        </p>
      </div>

      <SecondImagesSection />
    </div>
  );
}
