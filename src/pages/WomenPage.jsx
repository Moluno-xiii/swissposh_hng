import HeroSection from "../components/Hero";
import FirstImagesSection from "../components/FirstImagesSection";
import SecondImagesSection from "../components/SecondImagesSection";
export default function WomenPage() {
  return (
    <div className="">
      <HeroSection
        alt="image of a female model"
        image1="/woman_1.png"
        image1_large="/woman_1_large.svg"
        href="product/women"
      />

      <FirstImagesSection
        href="product/women"
        alt="image of a female model"
        image_2_large="/woman_2_large.png"
        image2="/woman_2.png"
        image_3_large="/woman_3_large.png"
        image3="/woman_3.png"
        image4="/woman_4.png"
        image_4_large="/woman_4_large.png"
        image5="/woman_5.png"
        image_5_large="/woman_5_large.png"
      />

      <div className="flex h-[94px] flex-col items-center justify-center gap-y-[6px] bg-primary bg-opacity-[62%] text-center text-[#FFFFFFDE] md:h-[104px]">
        <p className="h-[19px] text-[13.7px] font-black uppercase leading-[18.5px] md:h-[32px] md:text-2xl">
          up to 50% off fresh finds
        </p>
        <p className="text-[6.85px] font-medium leading-[9.25px] md:h-4 md:text-xs">
          Members to get free delivery over every $30 and free returns
        </p>
      </div>

      <SecondImagesSection
        alt="image of a female model"
        href="product/women"
        image6="/woman_6.png"
        image_6_large="/woman_6_large.png"
        image7="/woman_7.png"
        image_7_large="/woman_7_large.png"
      />
    </div>
  );
}
