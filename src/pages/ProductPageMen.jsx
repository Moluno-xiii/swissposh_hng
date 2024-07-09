import { menProductsArray } from "../../array";
import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const ProductDetails = lazy(() => import("../components/ProductDetails"));

const ProductPageMen = () => {
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
      <SecondaryNav text={"men"} href="/men" />
      <DiscountHeader />
      <ProductHeader />
      <ProductFilters />
      <Suspense fallback={<Loader />}>
        <ProductDetails mappedArray={menProductsArray} />
      </Suspense>
      <ProductFooter />
    </div>
  );
};

export default ProductPageMen;
