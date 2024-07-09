import HeroSection from "../components/Hero";
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
export default function WomenPageDetails() {
  return (
    <div className="">
      <SecondaryNav href={"/women"} text={"women"} />
      <HeroSection
        alt="image of a female model"
        image1="/woman_1.png"
        image1_large="/woman_1_large.svg"
        href="/women/products"
      />
      <Suspense fallback={<Loader />}>
        <FirstImagesSection
          href="/women/products"
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
      </Suspense>
      <PageAd />
      <Suspense fallback={<Loader />}>
        <SecondImagesSection
          alt="image of a female model"
          href="/women/products"
          image6="/woman_6.png"
          image_6_large="/woman_6_large.png"
          image7="/woman_7.png"
          image_7_large="/woman_7_large.png"
        />
      </Suspense>
    </div>
  );
}
