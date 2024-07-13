import ProductHeader from "../components/ProductHeader";
import ProductFilters from "../components/ProductFilters";
import ProductFooter from "../components/ProductFooter";
import SecondaryNav from "../components/SecondaryNav";
import DiscountHeader from "../components/DiscountHeader";
import { useLoaderData } from "react-router-dom";

import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const ProductDetails = lazy(() => import("../components/ProductDetails"));

const ProductPageWomen = () => {
   const data = useLoaderData();
  return (
    <div className="bg-[#F5F5F5] md:bg-white">
      <SecondaryNav href={"/women"} text={"women"} />
      <DiscountHeader />
      <ProductHeader />
      <ProductFilters />
      <Suspense fallback={<Loader />}>
        <ProductDetails
          mappedArray={data?.items}
          route={`/women/products/`}
        />
      </Suspense>
      <ProductFooter />
    </div>
  );
};

export default ProductPageWomen;
