/* eslint-disable react/prop-types */
import DiscountHeader from "./DiscountHeader";
import HeroImageSection from "./HeroImageSection";

const Hero = ({ alt, image1, image1_large, href }) => {
  return (
    <>
  
      <DiscountHeader />
      <div className="flex h-[75px] flex-col items-center justify-center gap-y-[6px] bg-primary text-center text-white md:h-[104px]">
        <p className="h-[16px] text-sm font-bold uppercase leading-[16.2px] md:mb-3 md:text-lg">
          up to 50% off fresh finds
        </p>
        <p className="h-3 text-xxs font-medium leading-[10.8px] md:text-xs">
          Members to get free delivery over every $30 and free returns
        </p>
      </div>
      <HeroImageSection
        href={href}
        image1={image1}
        image1_large={image1_large}
        alt={alt}
      />
    </>
  );
};

export default Hero;
