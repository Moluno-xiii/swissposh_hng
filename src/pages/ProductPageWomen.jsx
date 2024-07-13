import { womenProductsArray } from "../array";
import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";

import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const ProductDetails = lazy(() => import("../components/ProductDetails"));

const ProductPageWomen = () => {
  const {id} = useParams()
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
      <SecondaryNav href={"/women"} text={"women"} />
      <DiscountHeader />
      <ProductHeader />
      <ProductFilters />
      <Suspense fallback={<Loader />}>
        <ProductDetails
          mappedArray={womenProductsArray}
          route={`/women/products/:${id}`}
        />
      </Suspense>
      <ProductFooter />
    </div>
  );
};

export default ProductPageWomen;
