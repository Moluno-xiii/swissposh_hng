import HeroSection from "../components/Hero";
import FirstImagesSection from "../components/FirstImagesSection";
import SecondImagesSection from "../components/SecondImagesSection";
import SecondaryNav from "../components/SecondaryNav";
export default function MenPageDetails() {
  return (
    <div className="">
      <SecondaryNav text={"men"} href="/men" />
      <HeroSection
        alt="image of a male model"
        image1="/man_1.png"
        image1_large="/man_1_large.svg"
        href="/men/products"
      />

      <FirstImagesSection
        href="/men/products"
        alt="image of a male model"
        image_2_large="/man_2_large.png"
        image2="/man_2.png"
        image_3_large="/man_3_large.png"
        image3="/man_3.png"
        image4="/man_4.png"
        image_4_large="/man_4_large.png"
        image5="/man_5.png"
        image_5_large="/man_5_large.png"
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
        alt="image of a male model"
        href="/men/products"
        image6="/man_6.png"
        image_6_large="/man_6_large.png"
        image7="/man_7.png"
        image_7_large="/man_7_large.png"
      />
    </div>
  );
}
