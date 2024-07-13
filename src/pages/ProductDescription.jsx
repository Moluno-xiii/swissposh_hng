import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const ProductDescriptionImagesSection = lazy(
  () => import("../components/ProductDescriptionImagesSection"),
);
import ProductDescriptionSection from "../components/ProductDescriptionSection";

const ProductDescription = () => {
  return (
    <div className="mx-auto flex max-w-[1346px] flex-row gap-x-4">
      <Suspense fallback={<Loader />}>
        <ProductDescriptionImagesSection />
      </Suspense>
      <ProductDescriptionSection />
    </div>
  );
};

export default ProductDescription;
