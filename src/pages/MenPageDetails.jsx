import HeroSection from "../components/Hero";
// import FirstImagesSection from "../components/FirstImagesSection";
// import SecondImagesSection from "../components/SecondImagesSection";
import SecondaryNav from "../components/SecondaryNav";
import PageAd from "../components/PageAd";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const FirstImagesSection = lazy(
  () => import("../components/FirstImagesSection"),
);

const SecondImagesSection = lazy(
  () => import("../components/SecondImagesSection"),
);
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
      <Suspense fallback={<Loader />}>
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
      </Suspense>

      <PageAd />
      <Suspense fallback={<Loader />}>
        <SecondImagesSection
          alt="image of a male model"
          href="/men/products"
          image6="/man_6.png"
          image_6_large="/man_6_large.png"
          image7="/man_7.png"
          image_7_large="/man_7_large.png"
        />
      </Suspense>
    </div>
  );
}
