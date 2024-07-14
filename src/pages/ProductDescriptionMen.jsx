import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import { useLoaderData } from "react-router-dom";
import { addToCart, increment, decrement } from "../store/men/menSlice";
import { useSelector } from "react-redux";

const ProductDescriptionImagesSection = lazy(
  () => import("../components/ProductDescriptionImagesSection"),
);
import ProductDescriptionSection from "../components/ProductDescriptionSectionWomen";

const ProductDescriptionMen = () => {
  const item = useLoaderData();
  const cart = useSelector((state) => state.men.cart);
  return (
    <div className="mx-auto my-5 flex max-w-[1346px] flex-col gap-x-4 md:flex-row">
      <Suspense fallback={<Loader />}>
        <ProductDescriptionImagesSection item={item} />
      </Suspense>
      <ProductDescriptionSection
        item={item}
        addToCart={addToCart}
        increment={increment}
        decrement={decrement}
        cart={cart}
      />
    </div>
  );
};

export default ProductDescriptionMen;
