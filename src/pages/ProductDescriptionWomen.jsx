import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import { useLoaderData } from "react-router-dom";

const ProductDescriptionImagesSection = lazy(
  () => import("../components/ProductDescriptionImagesSection"),
);
import ProductDescriptionSection from "../components/ProductDescriptionSectionWomen";

const ProductDescription = () => {
  const item = useLoaderData()
  return (
    <div className="mx-auto my-5 flex max-w-[1346px] flex-row gap-x-4">
      <Suspense fallback={<Loader />}>
        <ProductDescriptionImagesSection item={item} />
      </Suspense>
      <ProductDescriptionSection item={item} />
    </div>
  );
};

export default ProductDescription;
