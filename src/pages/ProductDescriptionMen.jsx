import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import { useLoaderData } from "react-router-dom";

const ProductDescriptionImagesSection = lazy(
  () => import("../components/ProductDescriptionImagesSection"),
);
import ProductDescriptionSection from "../components/ProductDescriptionSectionMen";

const ProductDescriptionMen = () => {
  const item = useLoaderData();
  return (
    <div className="mx-auto my-5 flex max-w-[1346px] flex-col gap-x-4 md:flex-row">
      <Suspense fallback={<Loader />}>
        <ProductDescriptionImagesSection item={item} />
      </Suspense>
      <ProductDescriptionSection item={item} />
    </div>
  );
};

export default ProductDescriptionMen;
